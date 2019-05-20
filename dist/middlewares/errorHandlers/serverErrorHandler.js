"use strict";

module.exports = callback => {
	return async (req, res, next) => {
		try {
			await callback(req, res, next);
		} catch (e) {
			//res.status(e.status || 500).json({ message: 'Could not retrieve data from server' });
			res.status(e.status || 500).json({ error: `There has been an error: ${e}` });
		}
	};
};