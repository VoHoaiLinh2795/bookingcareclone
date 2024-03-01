'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('users', [{
      email: 'John@gmail.com',
      password: 'matkhausieuvip',
      firstName: 'john',
      lastName: 'superIdol',
      address: 'bui thi xuan',
      gender: 1,
      roleType: 'role',
      roleKey: 'r1',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
