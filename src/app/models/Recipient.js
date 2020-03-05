import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        adress: Sequelize.STRING,
        email: Sequelize.STRING,
        number: Sequelize.STRING,
        adress_complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        zip_code: Sequelize.STRING,
      },
    {
      sequelize,
    }
    );

    return this;

  }
}

export default Recipient;