import Joi from '@hapi/joi';
import { joiValidate } from '../joiValidate';

/**
 * Post validation schema
 */
const postSchema = Joi.object().keys({
	user_id: Joi.number().required(),
	text: Joi.string()
		.min(5)
		.trim()
		.required()
});

/**
 * Validate post body
 */
export const validatePost = (req, res, next) => {
	joiValidate(req, res, next, postSchema);
};
