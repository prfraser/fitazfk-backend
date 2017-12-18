const Session = require('./Session');

Session.deleteMany()
	.then(() => {
		console.log('Deleted all Sessions.')
	})
	.catch((error) => {
		console.log('An error occured trying to delete all Sessions.', error)
	})
