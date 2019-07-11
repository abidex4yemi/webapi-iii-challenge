'use strict';

import { successStatusTypes, createSuccess } from '../../helpers';
import { User } from '../../model';

const { OK } = successStatusTypes;

/**
 * Get users post by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getUserPosts = async (req, res, next) => {
	try {
		const { id } = req.user;

		const userPosts = await User.getUserPosts(id);

		return res.status(OK).json(createSuccess({ data: userPosts }));
	} catch (error) {
		next(error);
	}
};
