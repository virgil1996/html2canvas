/**
 * Parses the object-position property
 * @param {string} objectPosition - The object-position value (e.g., "50% 50%").
 * @returns {[number, number]} The parsed X and Y positions as percentages (e.g., [0.5, 0.5]).
 */
export function parseObjectPosition(objectPosition: string): [number, number] {
    const defaultPosition: [number, number] = [0.5, 0.5]; // Default to "50% 50%"
    if (!objectPosition) {
        return defaultPosition;
    }

    const positions = objectPosition.split(' ');
    const x = parsePosition(positions[0], defaultPosition[0]);
    const y = parsePosition(positions[1] || positions[0], defaultPosition[1]);
    return [x, y];
}

/**
 * Parses a single position value (e.g., "50%", "left", or "center")
 * @param {string} value - The position value to parse.
 * @param {number} defaultValue - The default value to use if parsing fails.
 * @returns {number} The parsed position as a percentage (e.g., 0.5 for "50%").
 */
function parsePosition(value: string, defaultValue: number): number {
    if (value.endsWith('%')) {
        return parseFloat(value) / 100;
    }
    switch (value) {
        case 'left':
        case 'top':
            return 0;
        case 'right':
        case 'bottom':
            return 1;
        case 'center':
            return 0.5;
        default:
            return defaultValue;
    }
}
