import { camelizeKeys } from "json-normalizer/hash-utils";

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

export { Processor };