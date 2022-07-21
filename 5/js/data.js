//модуль, задающий данные

import {getRandomArrayElement}
  from './utils.js';
import {getRandomPositiveInteger}
  from './utils.js';

const HOW_MANY_POSTS = 25;
const USERS_COUNT = 5;
const COMMENTS_COUNT = 10;

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

const users = Array.from({length: USERS_COUNT}, (_, i) => ({
  id: ++i,
  name: getRandomArrayElement(NAMES),
  avatar: `img/avatar-${i}.svg`
}));

const comments = Array.from({length: COMMENTS_COUNT}, (_, i) => ({
  id: ++i,
  postId: getRandomPositiveInteger(1, HOW_MANY_POSTS),
  userId: getRandomPositiveInteger(1, USERS_COUNT),
  message: getRandomArrayElement(COMMENTS),
}));

const posts = Array.from({length: HOW_MANY_POSTS}, (_, i) => ({
  id: ++i,
  url: `photos/${i}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
}));

function joinCommentsAndUsers() {
  comments.forEach((comment) => {
    comment.name = users.filter((user) => user.id === comment.userId)[0]['name'];
    comment.avatar = users.filter((user) => user.id === comment.userId)[0]['avatar'];
  });
}

function joinPostsAndComments() {
  posts.forEach((post) => {
    post.comments = comments.filter((comment) => post.id === comment.postId);
  });
}

joinCommentsAndUsers();
joinPostsAndComments();

export {users, posts};
