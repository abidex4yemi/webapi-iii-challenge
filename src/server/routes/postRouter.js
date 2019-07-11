'use strict';

import express from 'express';
import { getPosts, getPostById, addPost } from '../controllers/posts';
import { validatePostParam, validatePost } from '../middleware';

const router = express.Router();

validatePostParam(router);

router
	.route('/posts')
	.get(getPosts)
	.post(validatePost, addPost);

router.route('/posts/:id').get(getPostById);

export { router as postRouter };
