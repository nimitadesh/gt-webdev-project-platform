const {Login } = require('../controllers/authController.js')
const router = require('express').Router()

router.post('/login', Login)

module.exports = router