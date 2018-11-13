'use strict';

module.exports = { up: function (queryInterface, Sequelize) { 

  return queryInterface.bulkInsert('Messages', [{
    content: 'firstmessage',
    sender_id:'1',
    reciever_id:'2',
    createdAt: new Date(Date.UTC(2016, 1, 1)),
    updatedAt:new Date(Date.UTC(2016, 1, 1)),
  },{  content: 'message2',
  sender_id:'1',
  reciever_id:'2',
  createdAt: new Date(Date.UTC(2016, 1, 1)),
  updatedAt:new Date(Date.UTC(2016, 1, 1)),}], {});

},

down: function (queryInterface, Sequelize) { 
  return queryInterface.bulkDelete('Messages', null, {});

} };