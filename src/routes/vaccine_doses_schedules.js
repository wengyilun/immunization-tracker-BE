
import scheduleRouterController from '../controllers/vaccine_doses_schedules'

function setupImmunizationScheduleRoutes(router){
	router.get("/", scheduleRouterController.getMany)
	// router.post('/', scheduleRouterController.createOne)
	// router.get('/:id', scheduleRouterController.getOne)
	// router.put('/:id', scheduleRouterController.updateOne)
	// router.delete('/:id', scheduleRouterController.removeOne)
}

export default setupImmunizationScheduleRoutes
