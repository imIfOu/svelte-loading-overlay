export function convertObjectToCss(styles) {
    return Object.entries(styles)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}:${value}`)
        .join(';');
}