define(
  ["json-normalizer/string-utils","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var camelize = __dependency1__.camelize;
    var decamelize = __dependency1__.decamelize;

    function map(object, callback, binding) {
      var ret = {};

      for (var prop in object) {
        callback.call(binding, ret, prop, object[prop]);
      }

      return ret;
    }


    export function camelizeKeys(object) {
      return map(object, function(hash, key, value) {
        hash[camelize(key)] = value;
      });
    }

    export function decamelizeKeys(object) {
      return map(object, function(hash, key, value) {
        hash[decamelize(key)] = value;
      });
    }
    __exports__.map = map;
  });
