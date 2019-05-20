import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import setupRoutes from './routes'

async function startServer(port){
	// port = 3000;
	const app = express()
	app.use(helmet())
	app.use(cors())
	app.use(express.json())
	
	setupRoutes(app)
	
	app.listen(port, () => {
		console.log(`\n** HiHi server up on port ${port} **\n`)
	})
}

export default startServer

