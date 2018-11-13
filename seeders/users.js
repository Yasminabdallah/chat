'use strict';

module.exports = { up: function (queryInterface, Sequelize) { 

  return queryInterface.bulkInsert('Users', [{
    firstname: 'John Doe',
    contactId:'5',
    createdAt: new Date(Date.UTC(2016, 1, 1)),
    updatedAt:new Date(Date.UTC(2016, 1, 1)),
  },{  firstname: 'yasmin abdallah',
  contactId:'5',
  createdAt: new Date(Date.UTC(2016, 1, 1)),
  updatedAt:new Date(Date.UTC(2016, 1, 1)),}], {});

},

down: function (queryInterface, Sequelize) { 
  return queryInterface.bulkDelete('Users', null, {});

} };