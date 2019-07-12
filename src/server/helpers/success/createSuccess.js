/**
 * Create success response data format
 * 
 * @param {object} { data, message } 
 * 
 */ export const createSuccess = ({
	data,
	message = ''
}) => {
	return {
		success: true,
		message,
		body: data
	};
};
