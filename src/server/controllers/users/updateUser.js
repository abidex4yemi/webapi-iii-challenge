'use strict';

import { User } from '../../model';
import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Update a user with the given id and body
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
export const updateUser = async (req, res, next) => {
	try {
		// Get post id
		const { id } = req.user;

		// Get post body
		const userBodyForUpdate = req.body.sanitizedBody;

		// Update user
		await User.update(id, userBodyForUpdate);

		const updatedUser = await User.getUserById(id);

		return res.status(OK).json(
			createSuccess({
				data: updatedUser,
				message: 'User updated'
			})
		);
	} catch (error) {
		next(error);
	}
};
