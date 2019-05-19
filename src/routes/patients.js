
import patientController from '../controllers/patients'

function setupPatientRoutes(router){
	router.get("/", patientController.getMany)
	// router.post('/', patientController.createOne)
	// router.get('/:id', patientController.getOne)
	// router.put('/:id', patientController.updateOne)
	// router.delete('/:id', patientController.removeOne)
}

export default setupPatientRoutes
