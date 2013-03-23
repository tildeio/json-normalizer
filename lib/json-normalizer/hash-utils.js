import { camelize, decamelize } from "json-normalizer/string-utils";

function map(object, callback, binding) {
  var ret = {};

  for (var prop in object) {
    callback.call(binding, ret, prop, object[prop]);
  }

  return ret;
}

export { map };

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