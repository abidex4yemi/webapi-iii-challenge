'use strict';

import { Post } from '../../model';
import { createError, errorStatusTypes } from '../../helpers';

const { NOT_FOUND } = errorStatusTypes;

/**
 * Validate Post request parameter
 * 
 * @param {object} router 
 * @param {String} routePathName 
 */
export const validatePostParam = router => {
	return router.param('id', (req, res, next, postId) => {
		Post.getPostById(postId)
			.then(data => {
				if (!data) {
					return res.status(NOT_FOUND).json({
						message: 'The requested resource could not be found.',
						status: NOT_FOUND
					});
				}

				req.post = data;

				next();
			})
			.catch(next);
	});
};
