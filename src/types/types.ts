export const calculateSize = (size: number) => {
    if (typeof size !== 'number' || isNaN(size)) {
        return 'Invalid size';
    }
    return (size * 0.3025).toFixed(2);
}

export const calculateCoupleDate = (date: string): number => {
    const [year, month, day] = date.split('.').map(Number);
    const inputDate = new Date(2000 + year, month - 1, day);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return dayDifference;
};

