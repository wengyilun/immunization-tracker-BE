
import clinicController from '../controllers/clinics'

const verifyAddingClinics = require('../middlewares/errorHandlers/clinics/verifyAddingClinics');
const verifyUpdatingClinics = require('../middlewares/errorHandlers/clinics/verifyUpdatingClinics');
const serverErrorHandler = require('../middlewares/errorHandlers/serverErrorHandler');

function setupClinicRoutes(router){
	router.get("/", serverErrorHandler(clinicController.getMany))
	router.post('/', verifyAddingClinics, serverErrorHandler(clinicController.createOne))
	router.get('/:id', serverErrorHandler(clinicController.getOne))
	router.put('/:id', verifyUpdatingClinics, serverErrorHandler(clinicController.updateOne))
	router.delete('/:id', serverErrorHandler(clinicController.removeOne))
}

export default setupClinicRoutes
