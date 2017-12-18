const mongoose = require('mongoose');

// Use the promise functionality built into Node
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/fitazfk`, { useMongoClient: true })
	.then(() => {
		console.log('Successfully connected to database!')
	})
	.catch(error => {
		// Something went wrong!
		console.log('Error connecting to mongodb', error)
	})

module.exports = mongoose;
