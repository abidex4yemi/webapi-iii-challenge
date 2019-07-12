'use strict';

import express from 'express';
import { getPosts, getPostById, addPost, updatePost, deletePost } from '../controllers/posts';
import { validatePostParam, validatePost } from '../middleware';

const router = express.Router();

validatePostParam(router);

router
	.route('/posts')
	.get(getPosts)
	.post(validatePost, addPost);

router
	.route('/posts/:id')
	.get(getPostById)
	.put(validatePost, updatePost)
	.delete(deletePost);

export { router as postRouter };
