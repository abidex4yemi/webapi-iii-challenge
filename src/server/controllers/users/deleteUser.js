import { User } from '../../model';
import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Delete a user given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
export const deleteUser = async (req, res, next) => {
	try {
		const { id } = req.user;

		// Delete a user from database
		await User.remove(id);

		return res.status(OK).json(
			createSuccess({
				success: true,
				message: 'User deleted successfully'
			})
		);
	} catch (error) {
		next(error);
	}
};
