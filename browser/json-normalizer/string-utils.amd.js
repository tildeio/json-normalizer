define(
  [],
  function() {
    "use strict";
    var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);

    export function camelize(str) {
      return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
        return chr ? chr.toUpperCase() : '';
      }).replace(/^([A-Z])/, function(match, separator, chr) {
        return match.toLowerCase();
      });
    }

    var STRING_DECAMELIZE_REGEXP = (/([a-z])([A-Z])/g);

    export function decamelize(str) {
      return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
    }
  });
