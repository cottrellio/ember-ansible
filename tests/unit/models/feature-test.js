import { moduleForModel, test } from 'ember-qunit';

moduleForModel('feature', 'Unit | Model | feature', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:tag']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
