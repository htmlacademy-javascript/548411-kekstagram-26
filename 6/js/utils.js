// модуль со вспомогательными функциями

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

const isEscapeKey = (e) => e.key === 'Escape';

export {getRandomArrayElement};
export {getRandomPositiveInteger};
export {checkStringLength};
export {isEscapeKey};
