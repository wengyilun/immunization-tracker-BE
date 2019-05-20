'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _clinics = require('../controllers/clinics');

var _clinics2 = _interopRequireDefault(_clinics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verifyAddingClinics = require('../middlewares/errorHandlers/clinics/verifyAddingClinics');
const verifyUpdatingClinics = require('../middlewares/errorHandlers/clinics/verifyUpdatingClinics');
const serverErrorHandler = require('../middlewares/errorHandlers/serverErrorHandler');

function setupClinicRoutes(router) {
	router.get("/", serverErrorHandler(_clinics2.default.getMany));
	router.post('/', verifyAddingClinics, serverErrorHandler(_clinics2.default.createOne));
	router.get('/:id', serverErrorHandler(_clinics2.default.getOne));
	router.put('/:id', verifyUpdatingClinics, serverErrorHandler(_clinics2.default.updateOne));
	router.delete('/:id', serverErrorHandler(_clinics2.default.removeOne));
}

exports.default = setupClinicRoutes;