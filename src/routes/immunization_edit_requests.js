
import editRequestController from '../controllers/immunization_edit_requests'

const serverErrorHandler = require('../middlewares/errorHandlers/serverErrorHandler');

function setupImmunizationRecordEditRequestRoutes(router){
	router.get("/", serverErrorHandler(editRequestController.getMany))
	router.post('/', serverErrorHandler(editRequestController.createOne))
	router.get('/:id', serverErrorHandler(editRequestController.getOne))
	router.put('/:id', serverErrorHandler(editRequestController.updateOne))
	router.delete('/:id', serverErrorHandler(editRequestController.removeOne))
}

export default setupImmunizationRecordEditRequestRoutes
