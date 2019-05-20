module.exports = (req, res,  next) => {
	if (req.body.name && req.params.id){
		next()
	}else{
		res.status(400).json({
			message:'Clinic name and an id is required for update'
		})
	}
}
