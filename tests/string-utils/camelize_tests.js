(function() {

var camelize = JSONNormalizer.camelize;

module("string-utils#camelize");

test("camelize normal string", function() {
  deepEqual(camelize('my favorite items'), 'myFavoriteItems');
});

test("camelize capitalized string", function() {
  deepEqual(camelize('I Love Ramen'), 'iLoveRamen');
});

test("camelize dasherized string", function() {
  deepEqual(camelize('css-class-name'), 'cssClassName');
});

test("camelize underscored string", function() {
  deepEqual(camelize('action_name'), 'actionName');
});

test("camelize dot notation string", function() {
  deepEqual(camelize('action.name'), 'actionName');
});

test("does nothing with camelcased string", function() {
  deepEqual(camelize('innerHTML'), 'innerHTML');
});

})();
