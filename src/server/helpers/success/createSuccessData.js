/**
 * Create success response data format
 * 
 * @param {object} { data, message } 
 * 
 */ export const createSuccessData = ({
	data,
	message
}) => {
	return {
		success: true,
		message: message || '',
		body: data
	};
};
