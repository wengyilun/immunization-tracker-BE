const faker = require('faker');
const bcrypt = require('bcryptjs');

const hashedPassword = bcrypt.hashSync('123', 4);

const createFakerStaffs = (idx) => ({
  username: faker.name.firstName() + idx,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: hashedPassword,
  clinic_id: Math.floor(Math.random(10)) + 1
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('staffs').truncate()
  .then(function () {
    // Inserts seed entries
    const fakeStaffs = []
    
    for (let i = 0; i < 20; i++) {
      fakeStaffs.push(createFakerStaffs(i + 1));
    }
    return knex('staffs').insert(fakeStaffs)
  });
};
