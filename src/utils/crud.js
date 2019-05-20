import db from './db'
export const getOne = model => async (req, res) => {
    const items = await db(model)
          .where({id:req.params.id})
  
  console.log(items)
    if (items.length > 0){
      res.status(200).json(items[0])
    }else{
      res.status(404).json({ message: 'this record does not exist' });
    }
}

export const getMany = model => async (req, res) => {
     const list = await  db(model)
     res.status(200).json(list)
     console.log(list)
}

export const createOne = model => async (req, res) => {
   	const lastId = await db(model).insert(req.body)
    res.status(201).json(lastId)
}

export const updateOne = model => async (req, res) => {
   	const count = await db(model)
   	                      .where({id:req.params.id})
                          .update(req.body)
                      
    if (count > 0){
      res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
    }else{
      res.status(404).json({ message: 'this record does not exist' });
    }
}

export const removeOne = model => async (req, res) => {
    const count  = await db(model)
                          .where({id:req.params.id})
                          .del(req.body)
    if (count > 0){
      res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
    }else{
      res.status(404).json({ message: 'this record does not exist' });
    }
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
