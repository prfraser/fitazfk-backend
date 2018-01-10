const express = require('express');
const authMiddlWare = require('../middleware/auth');
const router = new express.Router();
const { requireJWT, verifyAdmin } = require('../middleware/auth');
const User = require('../models/User');

// Registration
router.post('/auth/register', authMiddlWare.register, authMiddlWare.signJWTForUser);

// Sign In
router.post('/auth', authMiddlWare.signIn, authMiddlWare.signJWTForUser);

// Get all Users
router.get('/users', requireJWT, verifyAdmin, (req, res) => {
	User.find()
	.then((users) => {
		res.send(users)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

module.exports = router;
