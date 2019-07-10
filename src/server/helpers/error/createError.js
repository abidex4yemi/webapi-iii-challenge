'use strict';

/**
 * Create new error
 * 
 * @param {String} message
 * @param {number} status 
 * 
 * @returns {object} error
 */
const createError = ({ message = 'Something went wrong, try again...', status = 500 }) => {
	// create new error with message
	const error = new Error(message);

	// Set error status
	error.status = status;

	return error;
};
