// точка входа. Модуль, связывающий другие модули
import {generatePosts} from './data.js';
import {createPostPreviews} from './post-previews.js';
import {showPost} from './show-post.js';

const posts = generatePosts();
createPostPreviews(posts);
showPost(posts);
