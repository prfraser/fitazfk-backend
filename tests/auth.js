const request = require('supertest');
const app = require('../server.js');
const User = require('../models/User');
const Session = require('../models/Session');
const chai = require('chai');

const should = chai.should()

const testEmail = 'john@doe.com'
let token
let adminToken
let currentSession
describe('Test routes', () => {
//Auth Routes
	it('should return 404 for an invalid URL', (done) => {
		request(app)
			.get('/bad-url')
			.expect(404, done)
	});
	
	// it('should register a user', (done) => {
	// 	request(app)
	// 		.post('/auth/register')
	// 		.send({ 
	// 			firstName: 'bill', 
	// 			lastName: 'harris', 
	// 			email: testEmail, 
	// 			password: 'password'
	// 		})
	// 		.expect(200)
	// 		.then((response) => {
	// 			token = response.body.token
	// 			done()
	// 		}) 
	// });

	// it('should log a user in', (done) => {
	// 	request(app)
	// 		.post('/auth')
	// 		.send({ 
	// 			email: testEmail, 
	// 			password: 'password'
	// 		})
	// 		.expect(200)
	// 		.then((response) => {
	// 			token = response.body.token
	// 			done()
	// 		})
	// });

// 	it('should log a user in', (done) => {
// 		request(app)
// 			.post('/auth')
// 			.send({ 
// 				email: 'admin@admin.com', 
// 				password: 'password'
// 			})
// 			.expect(200)
// 			.then((response) => {
// 				adminToken = response.body.token
// 				done()
// 			})
// 	});

// 	it('should require correct credentials', (done) => {
// 		request(app)
// 			.post('/auth')
// 			.send({ 
// 				email: testEmail, 
// 				password: 'passwasdford'
// 			})
// 			.expect(401, done)
// 	});

	// it('should display products', (done) => {
	// 	request(app)
	// 		.get('/products')
	// 		.expect(200)
	// 		.then((response) => {
	// 			// Make sure the response is the array!
	// 			response.body.should.be.an('array')
	// 			done()
	// 		})
	// });

// // Admin Test
// 	it('should only let an admin through to /admin', (done) => {
// 		request(app)
// 			.get('/admin')
// 			.expect(401, done)
// 	});

// // Product Create, Update and Delete
// 	it('should require a token to create a product', (done) => {
// 		request(app)
// 			.post('/products')
// 			.expect(401, done)
// 	});

// 	it('should create a product with a valid token', (done) => {
// 		request(app)
// 			.post('/products')
// 			.set('Authorization', 'Bearer ' + adminToken)
// 			.send({ 
// 				brandName: 'Wild Rhino', 
// 				name: 'Sweet boots'
// 			})
// 			.expect(200)
// 			.then((response) => {
// 				// Make sure the response is the array!
// 				response.body.should.be.an('object')
// 				currentProduct = response.body
// 				done()
// 			});
// 	});

// 	it('should require a token to update a product', (done) => {
// 		request(app)
// 			.patch('/products')
// 			.expect(401, done)
// 	});

// 	it('should create a product with a valid token', (done) => {
// 		request(app)
// 			.patch('/products')
// 			.set('Authorization', 'Bearer ' + adminToken)
// 			.send({ 
// 				_id: currentProduct._id,
// 				brandName: 'Wild Rhino00', 
// 				name: 'Sweet boots'
// 			})
// 			.expect(200)
// 			.then((response) => {
// 				// Make sure the response is the array!
// 				response.body.should.be.an('object')
// 				console.log(response.body)
// 				done()
// 			});
// 	});

// 	it('should require a token to delete a product', (done) => {
// 		request(app)
// 			.delete(`/products/${currentProduct._id}`)
// 			.expect(401, done)
// 	});

// 	it('should require a token to delete a product', (done) => {
// 		request(app)
// 			.delete(`/products/${currentProduct._id}`)
// 			.set('Authorization', 'Bearer ' + adminToken)
// 			.expect(200)
// 			.then((response) => {
// 				// Make sure the response is the array!
// 				response.body.should.be.an('object')
// 				done()
// 			});
// 	});

	after(() => {
		User.remove({ email: testEmail }).then(() => {
			console.log('Cleaned up the DB!')
		});
	});

});

