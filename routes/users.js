const express = require('express');
const router = new express.Router();
const { requireJWT, verifyAdmin } = require('../middleware/auth');
const User = require('../models/User');

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

// Get individual User
router.get('/user/:id', requireJWT, (req, res) => {
    User.findById(req.user._id)
    .then((user) => {
        res.send(user)
    })
    .catch((error) => {
        res.status(500).send({ error: error.message })
    })
});

// Handle Users activate/deactivate
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
