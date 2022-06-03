// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomIntInclusive(min, max) {
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

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(-2, 15);
getRandomIntInclusive(15, 15);
getRandomIntInclusive(26, 15);


// Функция для проверки максимальной длины строки

function checkStringLength (checkedString, maxLength) {
  return checkedString.length <= maxLength;
}

checkStringLength('Hello, world!', 6);
checkStringLength('Hello, world!', 13);
checkStringLength('Hello, world!', 20);
