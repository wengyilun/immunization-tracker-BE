module.exports = (req, res,  next) => {
	if (req.body.email && req.body.password){
		next()
	}else{
		res.status(400).json({
			message:'please provide an email and a password'
		})
	}
}
