if(process.env.node_env === "production"){
require('./src')
}else{
require('nodemon')({script: './dev.js'})
}
