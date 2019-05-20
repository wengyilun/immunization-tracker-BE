"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crud = require("../utils/crud");

const TABLE_NAME = "vaccine_doses_schedules";

exports.default = (0, _crud.crudControllers)(TABLE_NAME);