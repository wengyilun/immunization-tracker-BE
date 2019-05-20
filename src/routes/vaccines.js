import vaccineController from '../controllers/vaccines'
const verifyAddingVaccination = require('../middlewares/errorHandlers/vaccination/verifyAddingVaccination');
const verifyUpdatingVaccination = require('../middlewares/errorHandlers/vaccination/verifyUpdatingVaccination');
const serverErrorHandler = require('../middlewares/errorHandlers/serverErrorHandler');

function setupPatientRoutes(router){
	router.get("/", serverErrorHandler(vaccineController.getMany))
	router.get('/:id', serverErrorHandler(vaccineController.getOne))
	router.post('/', verifyAddingVaccination, serverErrorHandler(vaccineController.createOne))
	router.put('/:id', verifyUpdatingVaccination, serverErrorHandler(vaccineController.updateOne))
	router.delete('/:id', serverErrorHandler(vaccineController.removeOne))
}

export default setupPatientRoutes
