import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/bootstrap-mirage';
import getRandomInt from 'ansible/utils/get-random-int';

moduleForComponent('list-features', 'Integration | Component | list features', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{list-features}}`);

  assert.equal(this.$().length, 1);

  andThen(function() {
    // Setup db.
    let users         = server.createList('user', 10);
    let tags          = server.createList('tag', 10);

    Array.from(Array(10).keys()).map(() => {
      server.create('feature', { creatorId: users[getRandomInt(0, users.length - 1)].id, tagIds: [tags[getRandomInt(0, tags.length - 1)].id] });
    });

    this.features = server.db['features'];

    this.render(hbs`{{list-features features=features}}`);

    assert.equal(this.$('tr').length, this.features.length + 1);
  });

});
