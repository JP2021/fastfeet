import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController{

  async store (req,res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      adress: Yup.string().required(),
      email: Yup.string().email().required(),
      number: Yup.string().required(),
      adress_Complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      neighborhood: Yup.string().required(),
      zip_code: Yup.string().required(),

    });

    if (!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation failed'});
    }
    const recipientExists = Recipient.findOne ({where:{email:req.body.email}});

    if (recipientExists){
      return res.status(400).json({error: 'Recipient already exists'});
    }
    const {
      id,
      name,
      adress,
      email,
      number,
      adress_Complement,
      state,
      city,
      neighborhood,
      zip_code,    
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      adress,
      email,
      number,
      adress_Complement,
      state,
      city,
      neighborhood,
      zip_code,

    });
  }
    async update (req, res){
      const schema = Yup.object().shape({
        id: Yup.number().integer().required(),
        name: Yup.string(),
        adress: Yup.string(),
        email: Yup.string(),
        adress_Complement: Yup.string(),
        state: Yup.string(),
        city: Yup.string(),
        neighborhood: Yup.string(),
        zip_code: Yup.string(),
      });

        if (!(await schema.isValid(req.body))){
          return res.status(400).json({error: 'Validation Failed'});
        }
      const {id} = req.body;

      const Recipient = await Recipient.findByPk(id);

      if (id === Recipient.id){
        const recipientExists = await Recipient.findOne({where: { id }});
        if (!recipientExists){
          return res.status(401).json({error: 'Recipient not Found'});
        }
        
        if (email && email !== recipient.email){

          const recipientExists = await Recipient.findOne({where: {email}});

          if (recipientExists){
            return res.status(400).json({error: 'Email already in use'})
          }

          const {
            name,
            adress,
            email,
            number,
            adress_Complement,
            state,
            city,
            neighborhood,
            zip_code,

          } = await recipient.update(req.body)
          return res.json ({
            id,
            update:{
            name,
            adress,
            email,
            number,
            adress_Complement,
            state,
            city,
            neighborhood,
            zip_code,
            },
        
          });
        }
    
      }

    }

  }

  export default new RecipientController();