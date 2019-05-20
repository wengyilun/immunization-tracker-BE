'use strict';

var _start = require('./start');

var _start2 = _interopRequireDefault(_start);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

//
// const notTest = process.env.NODE_ENV !== 'test'
// const isProduction = process.env.NODE_ENV !== 'production'
// const logLevel = process.env.LOG_LEVEL || (notTest ? 'info' : 'warn')


(0, _start2.default)(process.env.PORT || 8000);