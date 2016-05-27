import Mirage, { faker } from 'ember-cli-mirage';

const { Factory } = Mirage;

export default Factory.extend({

  title:       faker.commerce.product,
  description: faker.lorem.sentence,
  vote() { return faker.random.number(10); },

  // creator: belongsTo('user'),
  // tags:    hasMany('tag'),
  // votes:   hasMany('vote')

});
