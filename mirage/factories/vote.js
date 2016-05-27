import Mirage, { faker } from 'ember-cli-mirage';

const { Factory } = Mirage;

export default Factory.extend({

  value() { return faker.random.number({ min: -1, max: 1 }); },

  // voter:        belongsTo('user'),
  // organization: hasMany('organization')

});
