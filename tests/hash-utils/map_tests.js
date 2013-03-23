(function() {

var map = JSONNormalizer.mapKeys;

module("hash-utils#map");

test("It supports mapping over the keys and values", function() {
  var obj = { a: 1, b: 2, c: 3 };
  var mapped = map(obj, function(hash, key, value) {
    hash[key + '!'] = value + 1;
  });

  deepEqual(mapped, { 'a!': 2, 'b!': 3, 'c!': 4 });
});

})();