import { Post } from '../../model';
import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Delete a post given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
export const deletePost = async (req, res, next) => {
	try {
		const { id } = req.post;

		// Delete post from database
		await Post.remove(id);

		return res.status(OK).json(
			createSuccess({
				success: true,
				message: 'Post deleted successfully'
			})
		);
	} catch (error) {
		next(error);
	}
};
