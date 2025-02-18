/* eslint-disable qunit/no-test-expect-argument */
import { underscore } from '@ember/string';
import { moduleFor, AbstractTestCase } from 'internal-test-helpers';

function test(assert, given, expected, description) {
  expectDeprecation(() => {
    assert.deepEqual(underscore(given), expected, description);
  }, 'Importing from `@ember/string` without having the `@ember/string` package in your project is deprecated. Please add `@ember/string` to your `package.json');
}

moduleFor(
  'EmberStringUtils.underscore',
  class extends AbstractTestCase {
    ['@test String underscore tests'](assert) {
      test(assert, 'my favorite items', 'my_favorite_items', 'with normal string');
      test(assert, 'css-class-name', 'css_class_name', 'with dasherized string');
      test(assert, 'action_name', 'action_name', 'does nothing with underscored string');
      test(assert, 'innerHTML', 'inner_html', 'with camelcased string');
      test(
        assert,
        'PrivateDocs/OwnerInvoice',
        'private_docs/owner_invoice',
        'underscore namespaced classified string'
      );
      test(
        assert,
        'privateDocs/ownerInvoice',
        'private_docs/owner_invoice',
        'underscore namespaced camelized string'
      );
      test(
        assert,
        'private-docs/owner-invoice',
        'private_docs/owner_invoice',
        'underscore namespaced dasherized string'
      );
    }
  }
);
