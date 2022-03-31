/**
 * @param {number} min
 * @param {number} max
 * @return random number between min and max
 */
const getRandomArbitraryNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min);

/**
 * @returns random rgb and rgba color
 */
const getRandomColor = () => {
    const MAX = 255;
    const r = getRandomArbitraryNumber(0, MAX);
    const g = getRandomArbitraryNumber(0, MAX);
    const b = getRandomArbitraryNumber(0, MAX);
    const a = [0.2, 0.4, 0.6, 0.8, 1][getRandomArbitraryNumber(0, 4)];

    return {
        rgba: `rgba(${r},${g},${b}, ${a})`,
        rgb: `rgb(${r},${g},${b})`,
    };
};

export { getRandomArbitraryNumber, getRandomColor };
