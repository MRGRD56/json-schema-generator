import PropertyDescription from "./models/PropertyDescription.js";
import PropertyType from "./models/PropertyType.js";

export default class JsonSchema {
    public readonly rootProperty: PropertyDescription;

    private static getType(object: any): PropertyType {
        const objectType = typeof object;

        if (Array.isArray(object)) {
            return "array";
        }
        if (objectType === "number" || objectType === "bigint") {
            return Number.isInteger(object)
                ? "integer"
                : "number";
        }
        if (objectType === "boolean") {
            return "boolean";
        }
        if (objectType === "string" || objectType === "symbol") {
            return "string";
        }
        if (object == null) {
            return "null";
        }

        return "object";
    }

    private static getPropertyDescription(object: any): PropertyDescription {
        const objectType = JsonSchema.getType(object);
        if (objectType !== "object") {
            if (objectType === "array") {
                const firstItem = object[0];
                return {
                    type: objectType,
                    items: this.getPropertyDescription(firstItem)
                };
            }
            return {
                type: objectType,
                example: object
            };
        }

        return {
            type: "object",
            properties: Object.fromEntries(Object.keys(object)
                .map(key => {
                    return [key, this.getPropertyDescription(object[key])]
                }))
        }
    }

    constructor(object: any) {
        this.rootProperty = JsonSchema.getPropertyDescription(object);
    }
}