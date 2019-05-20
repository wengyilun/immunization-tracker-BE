if(process.env.node_env === "production"){
require('./dist')
}else{
require('nodemon')({script: './dev.js'})
}
