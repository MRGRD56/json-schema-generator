import PropertyType from "./PropertyType.js";

export default interface PropertyDescription {
    type: PropertyType,
    description?: string,
    nullable?: boolean,
    format?: string,
    example?: any,
    properties?: Record<string, PropertyDescription>,
    required?: string[],
    items?: PropertyDescription,
}