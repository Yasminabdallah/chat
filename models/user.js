'use strict';
const Message=require('./message');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    contactId: DataTypes.INTEGER,

 
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    console.log(models);
   models.User.hasMany(models.Message,{foreignKey: 'sender_id'});
   models.User.hasMany(models.Message,{foreignKey: 'reciever_id'});
   models.User.hasMany(models.User,{foreignKey: 'contactId'});
   
  };
  
  return User;
};