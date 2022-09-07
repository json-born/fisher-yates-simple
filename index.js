const shuffle = (array) => {
  if (!array || array.constructor !== Array) {
    throw new Error("Input is not an array");
  }

  const arrayCopy = [...array];

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    const currentValue = arrayCopy[i];
    const randomIndex = Math.floor(Math.random() * array.length);

    arrayCopy[i] = arrayCopy[randomIndex];
    arrayCopy[randomIndex] = currentValue;
  }

  return arrayCopy;
};

module.exports = shuffle;
