require('dotenv').config();

if(process.env.node_env === "development"){
	require('nodemon')({script: './dev.js'})
	console.log('dev!!!!')
}else{
	require('./dist')
	console.log('production!!!!')
 }
// if(process.env.node_env === "development"){
// 	require('nodemon')({script: './dev.js'})
// 	console.log('dev!!!!')
// }else{
// 	require('./src')
// 	console.log('production!!!!')
// }
// require('./src')
