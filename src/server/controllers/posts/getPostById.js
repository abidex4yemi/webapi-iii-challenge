'use strict';

import { successStatusTypes, createSuccess } from '../../helpers';

const { OK } = successStatusTypes;

/**
 * Get post by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getPostById = (req, res, next) => {
	const post = req.post;

	return res.status(OK).json(createSuccess({ data: post }));
};
