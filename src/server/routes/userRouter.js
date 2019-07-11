'use strict';

import express from 'express';
import { getUsers, getUserById, getUserPosts, addUser } from '../controllers/users';
import { validateUserParam, validateUser } from '../middleware';

const router = express.Router();

validateUserParam(router);

router
	.route('/users')
	.get(getUsers)
	.post(validateUser, addUser);

router.route('/users/:id').get(getUserById);

router.route('/users/:id/posts').get(getUserPosts);

export { router as userRouter };
