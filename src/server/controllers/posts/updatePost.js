'use strict';

import { Post } from '../../model';
import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Update a post with the given id and body
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
export const updatePost = async (req, res, next) => {
	try {
		// Get post id
		const { id } = req.post;

		// Get post body
		const postBodyForUpdate = req.body.sanitizedBody;

		// Update post
		const postId = await Post.update(id, postBodyForUpdate);

		const updatedPost = await Post.getPostById(postId);

		return res.status(OK).json(
			createSuccess({
				data: updatedPost,
				message: 'Post updated'
			})
		);
	} catch (error) {
		next(error);
	}
};
