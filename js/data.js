//модуль, задающий данные

import {getRandomArrayElement}
  from './util.js';
import {getRandomPositiveInteger}
  from './util.js';

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
