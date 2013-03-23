(function() {

var decamelizeKeys = JSONNormalizer.decamelizeKeys;

module("hash-utils#decamelizeKeys");

test("It supports decamelizing the keys", function() {
  var obj = { railsIsOmakase: 1, rails_is_mmmmmakase: 2, emberIsEasyNoItsNot: 3 };
  var mapped = decamelizeKeys(obj);

  deepEqual(mapped, { rails_is_omakase: 1, rails_is_mmmmmakase: 2, ember_is_easy_no_its_not: 3 });
});

})();