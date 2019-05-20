'use strict';

module.exports = (req, res, next) => {
	if (req.body.received_date && req.body.dose_num && req.body.patient_id && req.body.clinic_id && req.body.vaccine_id && req.params.id) {
		next();
	} else {
		res.status(400).json({
			message: 'Received date, dose number, patient_id, clinic_id, vaccine_id and an id params are required for update'
		});
	}
};