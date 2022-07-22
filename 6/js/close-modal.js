import {isEscapeKey} from './utils.js';

function closeModal(modal, btn = null) {
  const body = document.querySelector('body');

  function close() {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
  }

  function onEscKeydown(e) {
    if (isEscapeKey(e)) {
      e.preventDefault();
      close();
    }
  }
  function onCloseModal(e) {
    e.preventDefault();
    close();
  }

  if (btn) {
    btn.addEventListener('click', onCloseModal);
    document.addEventListener('keydown', onEscKeydown);
  } else {
    close();
  }
}

export {closeModal};
