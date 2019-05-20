'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _immunization_edit_requests = require('../controllers/immunization_edit_requests');

var _immunization_edit_requests2 = _interopRequireDefault(_immunization_edit_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverErrorHandler = require('../middlewares/errorHandlers/serverErrorHandler');

function setupImmunizationRecordEditRequestRoutes(router) {
	router.get("/", serverErrorHandler(_immunization_edit_requests2.default.getMany));
	router.post('/', serverErrorHandler(_immunization_edit_requests2.default.createOne));
	router.get('/:id', serverErrorHandler(_immunization_edit_requests2.default.getOne));
	router.put('/:id', serverErrorHandler(_immunization_edit_requests2.default.updateOne));
	router.delete('/:id', serverErrorHandler(_immunization_edit_requests2.default.removeOne));
}

exports.default = setupImmunizationRecordEditRequestRoutes;