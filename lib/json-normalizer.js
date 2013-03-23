import { camelize, decamelize } from "json-normalizer/string-utils";
import { map, camelizeKeys, decamelizeKeys } from "json-normalizer/hash-utils";
import { Processor } from "json-normalizer/processor";

var mapKeys = map;

export { camelize, decamelize, mapKeys, camelizeKeys, decamelizeKeys, Processor };
