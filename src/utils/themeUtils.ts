type Theme = Record<string, any>; // A generic type for themes

// Deep merge function
export const mergeDeep = (target: Theme, source: Theme): Theme => {
    const output = { ...target }; // Create a shallow copy of the target

    for (const key in source) {
        // Check if the property is an object and not null
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            // Recursively merge objects
            output[key] = mergeDeep(output[key] || {}, source[key]);
        } else {
            // Otherwise, assign the value from source
            output[key] = source[key];
        }
    }

    return output;
};
