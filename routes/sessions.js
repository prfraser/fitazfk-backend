const express = require('express');
const Session = require('../models/Session');
const { requireJWT, verifyAdmin } = require('../middleware/auth');
const router = new express.Router();

router.get('/sessions', (req, res) => {
	Session.find()
	.then((sessions) => {
		res.send(sessions)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

// router.post('/products', requireJWT, (req, res) => {
// 	Product.create({ 
// 		brandName: req.body.brandName,
// 		name: req.body.name,
// 	})
// 	.then((product) => {
// 		res.send(product)
// 	})
// 	.catch((error) => {
// 		res.status(500).send({ error: error.message })
// 	})
// });

// router.patch('/products', requireJWT, verifyAdmin, (req, res) => {
// 	Product.findByIdAndUpdate(req.body._id, { $set: { 
// 			brandName: req.body.brandName,
// 			name: req.body.name,
// 		}}, { new: true })
// 	.then((product) => {
// 		res.send(product)
// 	})
// 	.catch((error) => {
// 		res.status(500).send({ error: error.message })
// 	})
// });

// router.get('/products/:id', requireJWT, (req, res) => {
// 	Product.findById(req.params.id)
// 	.then((product) => {
// 		res.send(product)
// 	})
// 	.catch((error) => {
// 		res.status(500).send({ error: error.message })
// 	})
// });

// router.delete('/products/:id', requireJWT, verifyAdmin, (req, res) => {
// 	Product.findByIdAndRemove(req.params.id)
// 	.then((product) => {
// 		res.send(product)
// 	})
// 	.catch((error) => {
// 		res.status(500).send({ error: error.message })
// 	})
// });

module.exports = router
