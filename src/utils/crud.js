import db from './db'
export const getOne = model => async (req, res) => {
  try {
  } catch (e) {
     console.error(e)
  }
}

export const getMany = model => async (req, res) => {
  console.log('getMany, model', model)
  try {
  } catch (e) {
    console.error(e)
  }
}

export const createOne = model => async (req, res) => {}

export const updateOne = model => async (req, res) => {}

export const removeOne = model => async (req, res) => {}

export const crudControllers = model => ({
  // removeOne: removeOne(db[model]),
  // updateOne: updateOne(model),
  getMany: getMany(model),
  // getOne: getOne(model),
  // createOne: createOne(model)
})
