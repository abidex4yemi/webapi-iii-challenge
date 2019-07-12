'use strict';
/**
 * Module dependencies
 */
import { createUserQueryBuilder } from '../helpers';

module.exports = knex => {
	const builderObj = createUserQueryBuilder(knex);

	return {
		...builderObj
	};
};
