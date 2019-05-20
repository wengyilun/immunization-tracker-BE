import express from 'express'
import setupStaffRoutes from './staffs'
import setupClinicRoutes from './clinics'
import setupPatientRoutes from './patients'
import setupVaccineRoutes from './vaccines'
import setupImmunizationRecordRoutes from './immunization_records'
import setupVaccineDosesSchedulesRoutes from './vaccine_doses_schedules'
import setupImmunizationRecordEditRequestRoutes from './immunization_record_edit_requests'


function setupRoutes(app){
	// Staffs
	const staffRouter = express.Router()
	setupStaffRoutes(staffRouter)
	app.use('/api/staffs', staffRouter)
	
	// Clinics
	const clincRouter = express.Router()
	setupClinicRoutes(clincRouter)
	app.use('/api/clinics', clincRouter)
	
	// Patients
	const patientRouter = express.Router()
	setupPatientRoutes(patientRouter)
	app.use('/api/patients', patientRouter)
	
	// Vaccines
	const vaccineRouter = express.Router()
	setupVaccineRoutes(vaccineRouter)
	app.use('/api/vaccines', vaccineRouter)
	
	// Immunization records
	const recordRouter = express.Router()
	setupImmunizationRecordRoutes(recordRouter)
	app.use('/api/immunization_records', recordRouter)
	
	// Vaccine Doses schedules
	const scheduleRouter = express.Router()
	setupVaccineDosesSchedulesRoutes(scheduleRouter)
	app.use('/api/vaccine_schedules', scheduleRouter)
	
	// Immunization edit request
	const editRequestRouter = express.Router()
	setupImmunizationRecordEditRequestRoutes(editRequestRouter)
	app.use('/api/immunization_record_edit_requests', editRequestRouter)
	
	
	app.get('/', async (req, res) => {
		console.log('root route called')
		res.status(200).end("Hello World")
	})
	
}

export default setupRoutes
