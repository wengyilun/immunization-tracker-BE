'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vaccines = require('../controllers/vaccines');

var _vaccines2 = _interopRequireDefault(_vaccines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verifyAddingVaccination = require('../middlewares/errorHandlers/vaccination/verifyAddingVaccination');
const verifyUpdatingVaccination = require('../middlewares/errorHandlers/vaccination/verifyUpdatingVaccination');
const serverErrorHandler = require('../middlewares/errorHandlers/serverErrorHandler');

function setupPatientRoutes(router) {
	router.get("/", serverErrorHandler(_vaccines2.default.getMany));
	router.get('/:id', serverErrorHandler(_vaccines2.default.getOne));
	router.post('/', verifyAddingVaccination, serverErrorHandler(_vaccines2.default.createOne));
	router.put('/:id', verifyUpdatingVaccination, serverErrorHandler(_vaccines2.default.updateOne));
	router.delete('/:id', serverErrorHandler(_vaccines2.default.removeOne));
}

exports.default = setupPatientRoutes;