const express = require('express');
const authMiddlWare = require('../middleware/auth');
const router = new express.Router();

// Registration
router.post('/auth/register', authMiddlWare.register, authMiddlWare.signJWTForUser);

// Sign In
router.post('/auth', authMiddlWare.signIn, authMiddlWare.signJWTForUser);

module.exports = router;
