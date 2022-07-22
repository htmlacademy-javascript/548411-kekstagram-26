import {closeModal} from './close-modal.js';
import {createComment} from './create-comment.js';

function createPost(post) {
  const bigPicture = document.querySelector('.big-picture');
  const image = bigPicture.querySelector('.big-picture__img img');
  const description = bigPicture.querySelector('.social__caption');
  const likes = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const commentsList = bigPicture.querySelector('.social__comments');
  const pictureCencel = bigPicture.querySelector('#picture-cancel');

  image.src = post.url;
  image.alt = post.alt;
  likes.textContent = post.likesCount;
  commentsCount.textContent = post.comments.length;
  description.textContent = post.caption;

  createComment(post.comments, commentsList);
  closeModal(bigPicture, pictureCencel);
}

export {createPost};

