import JsonSchema from "./JsonSchema.js";
import json from "./data/json.js";
import yaml from "js-yaml";

const schema = new JsonSchema(json);
console.log(yaml.dump(schema.rootProperty, undefined, 4));