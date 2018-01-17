const mongoose = require('./init');

const Session = mongoose.model('Session', {
	name: String,
	instructor: String,
	day: String,
	time: String,
	floor: Number,
	attendees: Array,
	maxAttendees: Number
});

module.exports = Session