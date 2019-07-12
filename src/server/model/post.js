'use strict';
/**
 * Module dependencies
 */
import { createPostQueryBuilder } from '../helpers';

module.exports = knex => {
	const builderObj = createPostQueryBuilder(knex);

	return {
		...builderObj
	};
};
