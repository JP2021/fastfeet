'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
         return queryInterface.createTable('users', { 
           
          id: {
            type: Sequelize.INTEGER,
            allNull: false,
            autoIncrement: true,
            primaryKey:true,

          },

          name:{
            type: Sequelize.STRING,
            allNull:false,
          },

          email:{
            type: Sequelize.STRING,
            allNull:false,
            unique:true,
          },

          password_hash:{
            type: Sequelize.STRING,
            allNull:false,
          },

          provider:{
            type: Sequelize.BOOLEAN,
            defaultValue:false,
            allNull:false,
          },

          created_at:{
            type: Sequelize.DATE,
            allNull:false,
          },

          updated_at:{
            type: Sequelize.DATE,
            allNull:false,
          },


          
        
        
        
        
        });

  },

  down: queryInterface => {
    
      return queryInterface.dropTable('users');
    
  }
};
