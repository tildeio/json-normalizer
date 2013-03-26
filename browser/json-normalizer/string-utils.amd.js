define(
  ["exports"],
  function(__exports__) {
    "use strict";
    var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);

    var __export1__ = function camelize(str) {
      return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
        return chr ? chr.toUpperCase() : '';
      }).replace(/^([A-Z])/, function(match, separator, chr) {
        return match.toLowerCase();
      });
    }

    var STRING_DECAMELIZE_REGEXP = (/([a-z])([A-Z])/g);

    var __export2__ = function decamelize(str) {
      return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
    }
    __exports__.camelize = __export1__;
    __exports__.decamelize = __export2__;
  });
