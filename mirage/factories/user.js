import Mirage, { faker } from 'ember-cli-mirage';

const { Factory } = Mirage;

export default Factory.extend({

  name() { return `${faker.name.firstName()} ${faker.name.lastName()}`; },
  email:      faker.internet.email,
  department: faker.commerce.department

  // votes:      hasMany('vote')

});
