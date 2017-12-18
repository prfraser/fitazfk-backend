const Session = require('./Session');

Session.create([
		{ 
			name: 'Dancing', 
			day: 'Wed Dec 20 2017', 
			instructor: 'Dave Barr', 
			time: '4pm - 5pm',
			floor: 1,
			attendees: []
		},
		{ 
			name: 'Balet', 
			day: 'Thu Dec 21 2017', 
			instructor: 'Dave Barr', 
			time: '8am - 9am',
			floor: 2,
			attendees: []
		}
	])
	.then((sessions) => {
		console.log('Created!', sessions)
	})
	.catch((error) => {
		console.log('An error occured tring to seed db.', error)
	})
