// eslint-disable-next-line no-unused-vars
function checkMaximumStringLength(originalString, maxLength) {
  return originalString.length <= maxLength;
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'неверно введённые данные';
}


const NAMES = [
  'Аарон',
  'Аврора',
  'Лия',
  'Леонхард',
  'Конон',
  'Кэлин',
  'Ноа',
  'Таврион',
  'Ричард',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


// eslint-disable-next-line no-unused-vars
function getAllData(amount = 25) {
  const allData = [];

  for (let index = 0; index < amount; index++) {
    allData[index] = {
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: `Описание ${index + 1}`,
      likes: getRandomIntInclusive(15, 200),
      comments: getComments(getRandomIntInclusive(1, 6))
    };
  }
  return allData;
}

function getComments(amount) {
  const commentsData = [];

  for (let index = 0; index < amount; index++) {
    commentsData[index] = {
      id: index + 1,
      avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
      message: MESSAGES[getRandomIntInclusive(0, MESSAGES.length - 1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length - 1)],
    };
  }

  return commentsData;
}

