'use strict';

import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Get user by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getUserById = (req, res) => {
	const user = req.user;

	return res.status(OK).json(createSuccess({ data: user }));
};
