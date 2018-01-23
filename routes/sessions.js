const express = require('express');
const Session = require('../models/Session');
const { requireJWT, verifyAdmin } = require('../middleware/auth');
const router = new express.Router();

// Get all sessions
router.get('/sessions', (req, res) => {
	Session.find()
	.then((sessions) => {
		res.send(sessions)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

// Create a new session, requires a token and admin role
router.post('/sessions', requireJWT, verifyAdmin, (req, res) => {
	Session.create({
		name: req.body.name,
		instructor: req.body.instructor,
		day: req.body.day,
		time: req.body.time,
		floor: req.body.floor,
		attendees: [],
		maxAttendees: req.body.maxAttendees
	})
	.then((session) => {
		res.send(session)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

// Updates a session, requires a token and admin role
router.patch('/sessions', requireJWT, verifyAdmin, (req, res) => {
	Session.findByIdAndUpdate(req.body._id, { $set: {
		name: req.body.name,
		instructor: req.body.instructor,
		day: req.body.day,
		time: req.body.time,
		floor: req.body.floor,
		maxAttendees: req.body.maxAttendees
	}}, { new: true })
	.then((session) => {
		res.send(session)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

// Get a specific session
router.get('/sessions/:id', (req, res) => {
	Session.findById(req.params.id)
	.then((session) => {
		res.send(session)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

// Add an attendee to a session
router.patch('/sessions/join', requireJWT, (req, res) => {
	console.log(req.user, req.user._id)
	console.log(typeof req.user._id)
	Session.findByIdAndUpdate(
		{ _id: req.body._id },
		{ $push: { attendees: { firstName: req.user.firstName, lastName: req.user.lastName, _id: req.user._id.toString() } } })
	.then((session) => {
		res.send(session)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

// Leave a session as an attendee
router.patch('/sessions/leave', requireJWT, (req, res) => {
	console.log(req.user)
	Session.findByIdAndUpdate(
		{ _id: req.body._id },
		{ $pull: { attendees: { _id: req.user._id.toString() }}})
	.then((session) => {
		res.send(session)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

// Remove an attendee from a session as an admin
router.patch('/admin/sessions/remove', requireJWT, (req, res) => {
	Session.findByIdAndUpdate(
		req.body._id,
		{ $pull: { attendees: { _id: req.body.attendeeId }}})
	.then((session) => {
		res.send(session)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

// Delete a specific session
router.delete('/sessions/:id', requireJWT, verifyAdmin, (req, res) => {
	Session.findByIdAndRemove(req.params.id)
	.then((session) => {
		res.send(session)
	})
	.catch((error) => {
		res.status(500).send({ error: error.message })
	})
});

module.exports = router
