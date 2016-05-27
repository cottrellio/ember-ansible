import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

  title:       attr('string'),
  description: attr('string'),
  vote:        attr('number'),

  creator:     belongsTo('user'),
  tags:        hasMany('tag'),
  // votes:       hasMany('vote')

});
