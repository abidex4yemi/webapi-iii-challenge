'use strict';
/**
 * Module dependencies
 */
import { errorStatusTypes } from '../../helpers';

// Get error status types
const { BAD_REQUEST, CONFLICT, GENERIC_ERROR, NOT_FOUND } = errorStatusTypes;

/**
 * Handle bad request error
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next
 * @param {object} err 
 */
const badRequest = (err, req, res, next) => {
	if (err.status !== BAD_REQUEST) {
		return next(err);
	}

	return res.status(BAD_REQUEST).json({
		ok: false,
		errors: [err]
	});
};

/**
 * Handle resource not found error
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const notFound = (err, req, res, next) => {
	if (err.status !== NOT_FOUND) {
		return next(err);
	}

	return res.status(NOT_FOUND).json({
		ok: false,
		errors: [err]
	});
};

/**
 * Handle resource resource already exist error
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const resourceConflict = (err, req, res, next) => {
	if (err.status !== CONFLICT) {
		return next(err);
	}

	return res.status(CONFLICT).json({
		ok: false,
		errors: [err]
	});
};

/**
 * Handle server error
 * 
 * @param {object} err 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
const genericError = (err, req, res, next) => {
	return res.status(GENERIC_ERROR).json({
		ok: false,
		message: err.message || 'Internal server error',
		errors: [err]
	});
};

/**
 * Package all error handlers as object
 */
const allMiddlewareAsObject = {
	badRequest,
	notFound,
	genericError,
	resourceConflict
};

/**
 * Export all error middleware as an array
 * 
 */
export const allErrorMiddlewareAsArray = Object.keys(allMiddlewareAsObject).map(key => allMiddlewareAsObject[key]);
