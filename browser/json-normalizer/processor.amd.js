define(
  ["json-normalizer/hash-utils","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var camelizeKeys = __dependency1__.camelizeKeys;

    function Processor(json) {
    	this.json = json;
    }

    Processor.prototype = {
      constructor: Processor,

      camelizeKeys: function() {
        this.json = camelizeKeys(this.json);
        return this;
      }
    }

    __exports__.Processor = Processor;
  });
