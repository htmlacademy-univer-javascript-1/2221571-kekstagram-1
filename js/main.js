// eslint-disable-next-line no-unused-vars
function checkMaximumStringLength(originalString, maxLength) {
  return originalString.length <= maxLength;
}


// eslint-disable-next-line no-unused-vars
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return 'неверно введённые данные';
  }
}


