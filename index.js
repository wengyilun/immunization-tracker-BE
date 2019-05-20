if(process.env.node_env === "development"){
	require('nodemon')({script: './dev.js'})
	console.log('dev!!!!')
}else{
	require('./dist')
	console.log('production!!!!')
}
