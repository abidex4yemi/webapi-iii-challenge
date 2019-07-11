'use strict';

import { User } from '../../../model';
import { errorStatusTypes } from '../../../helpers';

const { NOT_FOUND } = errorStatusTypes;

/**
 * Validate User request parameter
 * 
 * @param {object} router 
 * @param {String} routePathName 
 */
export const validateUserParam = router => {
	return router.param('id', (req, res, next, userId) => {
		User.getUserById(userId)
			.then(data => {
				if (!data) {
					return res.status(NOT_FOUND).json({
						message: 'The requested resource could not be found.',
						status: NOT_FOUND
					});
				}

				req.user = data;

				next();
			})
			.catch(next);
	});
};
