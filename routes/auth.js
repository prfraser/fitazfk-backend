const express = require('express');
const authMiddleWare = require('../middleware/auth');
const router = new express.Router();

// Registration
router.post('/auth/register', authMiddleWare.register, authMiddleWare.signJWTForUser);

// Sign In
router.post('/auth', authMiddleWare.signIn, authMiddleWare.signJWTForUser);

router.post('/user/active', requireJWT, verifyAdmin, (req, res) => {
	User.findByIdAndUpdate(req.body._id, { $set: { 
		active: req.body.active
	}}, { new: true })
	.then((user) => {
		res.send(user)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
})

module.exports = router;
