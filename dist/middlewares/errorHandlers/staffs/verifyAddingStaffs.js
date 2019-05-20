'use strict';

module.exports = (req, res, next) => {
	if (req.body.email && req.body.password && req.body.clinic_id) {
		next();
	} else {
		res.status(400).json({
			message: 'please provide an email and a password'
		});
	}
};