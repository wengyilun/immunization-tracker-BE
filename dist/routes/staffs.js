'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _staffs = require('../controllers/staffs');

var _staffs2 = _interopRequireDefault(_staffs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verifyAddingStaffs = require('../middlewares/errorHandlers/staffs/verifyAddingStaffs');
const verifyUpdatingStaffs = require('../middlewares/errorHandlers/staffs/verifyUpdatingStaffs');
const serverErrorHandler = require('../middlewares/errorHandlers/serverErrorHandler');

function setupStaffRoutes(router) {
	console.log('staffController', serverErrorHandler(_staffs2.default));
	router.get("/", serverErrorHandler(_staffs2.default.getMany));
	router.post('/', verifyAddingStaffs, serverErrorHandler(_staffs2.default.createOne));
	router.get('/:id', serverErrorHandler(_staffs2.default.getOne));
	router.put('/:id', verifyUpdatingStaffs, serverErrorHandler(_staffs2.default.updateOne));
	router.delete('/:id', serverErrorHandler(_staffs2.default.removeOne));
}

exports.default = setupStaffRoutes;