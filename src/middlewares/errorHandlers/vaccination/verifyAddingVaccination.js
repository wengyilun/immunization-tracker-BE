module.exports = (req, res,  next) => {
	if (req.body.name && req.body.fullname && req.body.num_doses){
		next()
	}else{
		res.status(400).json({
			message:'please provide a name, fullname and num_doses needed'
		})
	}
}
