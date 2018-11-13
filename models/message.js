'use strict';

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
  
    content: DataTypes.STRING,
    sender_id: DataTypes.INTEGER,
    reciever_id: DataTypes.INTEGER,
   
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
    models.Message.belongsTo(models.User,{foreignKey: 'sender_id'});
    models.Message.belongsTo(models.User,{foreignKey: 'reciever_id'});
  };
  
  return Message;
};