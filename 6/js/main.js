// точка входа. Модуль, связывающий другие модули
import {getPosts} from './data.js';
import {createPostPreviews} from './post-previews.js';
import {createPost} from './create-post.js';
import './create-post.js';


const posts = getPosts();
createPostPreviews(posts);
createPost(posts[0]);
