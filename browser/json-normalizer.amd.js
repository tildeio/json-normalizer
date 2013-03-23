define(
  ["json-normalizer/string-utils","json-normalizer/hash-utils","json-normalizer/processor","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var camelize = __dependency1__.camelize;
    var decamelize = __dependency1__.decamelize;
    var map = __dependency2__.map;
    var camelizeKeys = __dependency2__.camelizeKeys;
    var decamelizeKeys = __dependency2__.decamelizeKeys;
    var Processor = __dependency3__.Processor;

    var mapKeys = map;


    __exports__.camelize = camelize;
    __exports__.decamelize = decamelize;
    __exports__.mapKeys = mapKeys;
    __exports__.camelizeKeys = camelizeKeys;
    __exports__.decamelizeKeys = decamelizeKeys;
    __exports__.Processor = Processor;
  });
