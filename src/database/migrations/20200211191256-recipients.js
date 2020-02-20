'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
         return queryInterface.createTable('recipients', { 
           
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

          adress:{
            type: Sequelize.STRING,
            allNull:false,
           
          },

          number:{
            type: Sequelize.STRING,
            allNull:false,
          },

          adress_complement:{
            type: Sequelize.STRING,
            
          },

          state:{
            type: Sequelize.STRING,
            allNull: false
            
          },

          city:{
            type: Sequelize.STRING,
            allNull: false
            
          },

          neighborhood:{
            type: Sequelize.STRING,
            allNull: false
            
          },

          zip_Code:{
            type: Sequelize.STRING,
            allNull: false
            
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
    
      return queryInterface.dropTable('recipients');
    
  }
};