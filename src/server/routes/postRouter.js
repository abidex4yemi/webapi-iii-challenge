'use strict';

import express from 'express';
import { getPosts, getPostById } from '../controllers/posts';
import { validatePostParam } from '../middleware';

const router = express.Router();

validatePostParam(router);

router.route('/posts').get(getPosts);

router.route('/posts/:id').get(getPostById);

export { router as postRouter };
