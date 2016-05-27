import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({

  creator: belongsTo('user'),
  tags:    hasMany(),
  votes:   hasMany()

});
