const express = require('express');
const authMiddleWare = require('../middleware/auth');
const router = new express.Router();

// Registration
router.post('/auth/register', authMiddleWare.register, authMiddleWare.signJWTForUser);

// Sign In
router.post('/auth', authMiddleWare.signIn, authMiddleWare.signJWTForUser);

module.exports = router;
