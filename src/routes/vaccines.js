
import vaccineController from '../controllers/vaccines'

function setupPatientRoutes(router){
	router.get("/", vaccineController.getMany)
	// router.post('/', vaccineController.createOne)
	// router.get('/:id', vaccineController.getOne)
	// router.put('/:id', vaccineController.updateOne)
	// router.delete('/:id', vaccineController.removeOne)
}

export default setupPatientRoutes
