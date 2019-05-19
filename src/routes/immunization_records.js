
import recordRouterController from '../controllers/immunization_records'

function setupImmunizationRecordRoutes(router){
	router.get("/", recordRouterController.getMany)
	// router.post('/', recordRouterController.createOne)
	// router.get('/:id', recordRouterController.getOne)
	// router.put('/:id', recordRouterController.updateOne)
	// router.delete('/:id', recordRouterController.removeOne)
}

export default setupImmunizationRecordRoutes
