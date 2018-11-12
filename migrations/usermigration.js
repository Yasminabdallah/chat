const dbconfig=require('../config/dbconfig');
const Message=require('../migrations/messagesmigration');
//condition if not exist create table user
const User = dbconfig.sequelize.define('users', {
    uuid: {
        type: dbconfig.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
  
    firstName: {
      type: dbconfig.Sequelize.STRING
    }
 
  });

  User.hasMany(Message.Message, {foreignKey: 'userId', sourceKey: 'uuid'});
  Message.Message.belongsTo(User, {foreignKey: 'userId', targetKey: 'uuid'});


  module.exports={User}