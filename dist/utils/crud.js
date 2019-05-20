'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudControllers = exports.loginUser = exports.registerUser = exports.removeOne = exports.updateOne = exports.createOne = exports.getMany = exports.getOne = undefined;

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getOne = exports.getOne = model => async (req, res) => {
  const items = await (0, _db2.default)(model).where({ id: req.params.id });

  console.log(items);
  if (items.length > 0) {
    res.status(200).json(items[0]);
  } else {
    res.status(404).json({ message: 'this record does not exist' });
  }
};

const getMany = exports.getMany = model => async (req, res) => {
  const list = await (0, _db2.default)(model);
  res.status(200).json(list);
  console.log(list);
};

const createOne = exports.createOne = model => async (req, res) => {
  const lastId = await (0, _db2.default)(model).insert(req.body);
  res.status(201).json(lastId);
};

const updateOne = exports.updateOne = model => async (req, res) => {
  const count = await (0, _db2.default)(model).where({ id: req.params.id }).update(req.body);

  if (count > 0) {
    res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} updated` });
  } else {
    res.status(404).json({ message: 'this record does not exist' });
  }
};

const removeOne = exports.removeOne = model => async (req, res) => {
  const count = await (0, _db2.default)(model).where({ id: req.params.id }).del(req.body);
  if (count > 0) {
    res.status(200).json({ message: `${count} ${count > 1 ? 'records' : 'record'} deleted` });
  } else {
    res.status(404).json({ message: 'this record does not exist' });
  }
};

const registerUser = exports.registerUser = model => async (req, res) => {
  const lastId = await (0, _db2.default)(model).insert(req.body);
  res.status(201).json(lastId);
};

const loginUser = exports.loginUser = model => async (req, res) => {
  const lastId = await (0, _db2.default)(model).insert(req.body);
  res.status(201).json(lastId);
};

const crudControllers = exports.crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
  registerUser: registerUser(model),
  loginUser: loginUser(model)
});