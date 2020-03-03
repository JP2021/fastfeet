import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static Init(sequelize) {
    super.Init(
      {
        name: Sequelize.STRING,
        adress: Sequelize.STRING,
        email: Sequelize.STRING,
        number: Sequelize.STRING,
        adress_Complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        zip_Code: Sequelize.STRING,
      },
    {
      sequelize,
    }
    );

    return this;

  }
}

export default Recipient;