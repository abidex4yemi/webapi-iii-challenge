'use strict';

import { Post } from '../../model';
import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Add new post
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const addPost = async (req, res, next) => {
	try {
		const post = req.body.sanitizedBody;

		const newPost = await Post.insert(post);

		return res.status(OK).json(
			createSuccess({
				data: newPost,
				message: 'New post created'
			})
		);
	} catch (error) {
		next(error);
	}
};
