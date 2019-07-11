'use strict';

import express from 'express';
import { getUsers } from '../controllers/users';

const router = express.Router();

router.route('/users').get(getUsers);

export { router as userRouter };
