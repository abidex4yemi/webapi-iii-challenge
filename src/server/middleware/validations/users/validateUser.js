import Joi from '@hapi/joi';
import { joiValidate } from '../joiValidate';

/**
 * User validation schema
 */
const userSchema = Joi.object().keys({
	name: Joi.string()
		.min(3)
		.trim()
		.required()
});

/**
 * Validate user body
 */
export const validateUser = (req, res, next) => {
	joiValidate(req, res, next, userSchema);
};
