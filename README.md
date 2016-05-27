# Setting up a TDD Environment w/ Ember-cli-mirage

### Requirements:
- ember-cli@2.5.1
- ember-cli-mirage@0.2.0-beta.9 (latest beta)

## Setup App with Mirage

1. New App
```
ember new ember-ansible
```

2. Create Models
```
ember g model user
ember g model feature
ember g model tag
```

3. Create Routes
```
ember g route users -p
ember g route features -p
```

4. Install Mirage (latest beta [v0.2.0-beta.9])
```
ember install ember-cli-mirage@beta --save-dev
ember g ember-cli-mirage
```

5. Create Mirage Models
Mirage models only define relationships.
```
ember g mirage-model user
ember g mirage-model feature
ember g mirage-model tag
```

6. Create Mirage Factories
Mirage factories only define attributes.
```
ember g mirage-factory user
ember g mirage-factory feature
ember g mirage-factory tag
```

7. Use JSON-API Serializer
```
// /mirage/serializers/application.js
import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
});
```

8. Configure Default Scenario

## TDD Some Stuff Using Mirage Data

1. Run your tests!
```
ember t
```

2. Fix Model Associations in unit tests.

3. Create Features Controller
```
ember g controller features -p
```

4. Create list-features component
```
ember g component list-features -p
```

5. Create test-helper `bootstrap-mirage`
```
ember g test-helper bootstrap-mirage
```

6. Import bootstrap-mirage into list-features integration test
```
import startMirage from '../../../helpers/setup-mirage-for-integration';
```

7.