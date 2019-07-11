'use strict';

import express from 'express';
import { getPosts } from '../controllers/posts';

const router = express.Router();

// Handle posts route
router.route('/posts').get(getPosts);

export { router as postRouter };
