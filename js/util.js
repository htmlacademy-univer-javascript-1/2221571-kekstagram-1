function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'неверно введённые данные';
}

function checkMaximumStringLength(originalString, maxLength) {
  return originalString.length <= maxLength;
}

export { getRandomIntInclusive, checkMaximumStringLength };
