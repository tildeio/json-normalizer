(function() {

var decamelize = JSONNormalizer.decamelize;

module('string-utils#decamelize');

test("does nothing with normal string", function() {
  deepEqual(decamelize('my favorite items'), 'my favorite items');
});

test("does nothing with dasherized string", function() {
  deepEqual(decamelize('css-class-name'), 'css-class-name');
});

test("does nothing with underscored string", function() {
  deepEqual(decamelize('action_name'), 'action_name');
});

test("converts a camelized string into all lower case separated by underscores.", function() {
  deepEqual(decamelize('innerHTML'), 'inner_html');
});

})();