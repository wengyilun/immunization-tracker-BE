'use strict';

module.exports = (req, res, next) => {
	if (req.body.email && req.body.password && req.body.clinic_id && req.params.id) {
		next();
	} else {
		res.status(400).json({
			message: 'Email, password and an id are required for update'
		});
	}
};