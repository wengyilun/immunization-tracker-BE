"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vaccine_doses_schedules = require("../controllers/vaccine_doses_schedules");

var _vaccine_doses_schedules2 = _interopRequireDefault(_vaccine_doses_schedules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupImmunizationScheduleRoutes(router) {
	router.get("/", _vaccine_doses_schedules2.default.getMany);
	// router.post('/', scheduleRouterController.createOne)
	// router.get('/:id', scheduleRouterController.getOne)
	// router.put('/:id', scheduleRouterController.updateOne)
	// router.delete('/:id', scheduleRouterController.removeOne)
}

exports.default = setupImmunizationScheduleRoutes;