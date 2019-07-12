'use strict';

import { User } from '../../model';
import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Add new user
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const addUser = async (req, res, next) => {
	try {
		const user = req.body.sanitizedBody;

		const newUser = await User.insert(user);

		return res.status(OK).json(
			createSuccess({
				data: newUser,
				message: 'New user created'
			})
		);
	} catch (error) {
		next(error);
	}
};
