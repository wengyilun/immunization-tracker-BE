module.exports = (req, res,  next) => {
	if (req.body && req.params.id){
		next()
	}else{
		res.status(400).json({
			message:'An object and id is required for update'
		})
	}
}
