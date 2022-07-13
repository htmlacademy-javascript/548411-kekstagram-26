const HOW_MANY_POSTS = 25;

const COMMENTS = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'
];

const NAMES = [
  'Евгений',
  'Анастасия',
  'Борис',
  'Кот Тимон',
  'Аноним'
];

const DESCRIPTIONS = [
  'Класс',
  'Удачное',
  'Топ',
  'Не очень',
  'Отвратительно'
];

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomPositiveInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0) {
    return 0;
  }

  if (min === max) {
    return min;
  }

  if (min > max) {
    [min, max] = [max, min];
  }
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция для проверки максимальной длины строки

function checkStringLength (checkedString, maxLength) {
  return checkedString.length <= maxLength;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: [{
    id: getRandomPositiveInteger(1, 100) + Math.random(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  },{
    id: getRandomPositiveInteger(1, 100) + Math.random(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  },{
    id: getRandomPositiveInteger(1, 100) + Math.random(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  }],
});


const makePhotos = () => {
  const testData = [];
  for (let i = 1; i <= 25; i++) {
    testData.push(createPhoto(i));
  }
  return testData;
};
const IDS = makePhotos(HOW_MANY_POSTS);
