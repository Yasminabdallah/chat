const dbconfig=require('../config/dbconfig');

const Message = dbconfig.sequelize.define('messages', {
    uuid: {
        type: dbconfig.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
    content: {
      type: dbconfig.Sequelize.STRING
    },
    userId:{
        type: dbconfig.Sequelize.INTEGER
    }
  
  });

  module.exports={Message}