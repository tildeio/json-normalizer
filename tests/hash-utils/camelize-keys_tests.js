(function() {

var camelizeKeys = JSONNormalizer.camelizeKeys;

module("hash-utils#camelizeKeys");

test("It supports camelizing the keys", function() {
  var obj = { rails_is_omakase: 1, railsIsMmmmmakase: 2, ember_is_easy_no_its_not: 3 };
  var mapped = camelizeKeys(obj);

  deepEqual(mapped, { railsIsOmakase: 1, railsIsMmmmmakase: 2, emberIsEasyNoItsNot: 3 });
});

})();