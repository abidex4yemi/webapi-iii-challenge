import { Post } from '../../model';
import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Get all posts
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getPosts = async (req, res, next) => {
	try {
		const posts = await Post.getAll();

		return res.status(OK).json(
			createSuccess({
				data: posts
			})
		);
	} catch (error) {
		return next(error);
	}
};
