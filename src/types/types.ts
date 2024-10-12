export const calculateSize = (size: number) => {
    if (typeof size !== 'number' || isNaN(size)) {
        return 'Invalid size';
    }
    return (size * 0.3025).toFixed(2);
}

