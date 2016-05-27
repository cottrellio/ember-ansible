import Mirage, { faker } from 'ember-cli-mirage';

const { Factory } = Mirage;

export default Factory.extend({

  name:   faker.company.companyName,
  weight() { return faker.random.number(10); },

  // votes:  hasMany('vote')

});
