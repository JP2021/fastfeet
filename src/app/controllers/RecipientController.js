import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController{

  async store (req,res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      adress: Yup.string().required(),
      email: Yup.string().email().required(),
      number: Yup.string().required(),
      adress_complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      neighborhood: Yup.string().required(),
      zip_code: Yup.string().required(),

    });

    if (!(await schema.isValid(req.body))){
      return res.status(400).json({erro: 'Validation fails'});
    }

    const recipientExists= await Recipient.findOne({ where: {email: req.body.email}});

    if (recipientExists) {

      return res.status(400).json({error: 'User already exists',})
    }
    const {
      id,
      name,
      adress,
      email,
      number,
      adress_complement,
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
      adress_complement,
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
        adress_complement: Yup.string(),
        state: Yup.string(),
        city: Yup.string(),
        neighborhood: Yup.string(),
        zip_code: Yup.string(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validations fail' });
      }
  
      const recipient = await Recipient.findByPk(req.body.id);
      if (!(await recipient)) {
        return res.status(400).json({ error: 'Recipient not found' });
      }

      const {email} = req.body;

    
    if (email && email !== recipient.email){
      const recipientExists = await Recipient.findOne({where: {email}});
      if (recipientExists){
        return res.status(400).json({error: 'User Already exists'});
      }
    }
  
      const {
      id,
      name,
      adress,
      number,
      adress_complement,
      state,
      city,
      neighborhood,
      zip_code,

      } = await recipient.update(req.body);
  
      return res.json({

      id,
      name,
      adress,
      email,
      number,
      adress_complement,
      state,
      city,
      neighborhood,
      zip_code,


      });
    }
  }
  export default new RecipientController();
  