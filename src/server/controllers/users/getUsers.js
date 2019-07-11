import { User } from '../../model';
import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Get all users
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getUsers = async (req, res, next) => {
	try {
		const users = await User.getAll();

		return res.status(OK).json(
			createSuccess({
				data: users
			})
		);
	} catch (error) {
		return next(error);
	}
};
