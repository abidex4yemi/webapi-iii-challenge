'use strict';

import express from 'express';
import { getUsers, getUserById, getUserPosts } from '../controllers/users';
import { validateUserParam } from '../middleware';

const router = express.Router();

validateUserParam(router);

router.route('/users').get(getUsers);

router.route('/users/:id').get(getUserById);

router.route('/users/:id/posts').get(getUserPosts);

export { router as userRouter };
