import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({

  voter:        belongsTo('user'),
  organization: hasMany()

});
