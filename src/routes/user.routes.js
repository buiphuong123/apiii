const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller');

router.get('/getListUser', authController.getListUser)

module.exports = router