const express 								= require('express')
const router 									= express.Router()

const getAllPlayers 					= require('./handlers/getAllPlayers')

router
	.get('/', getAllPlayers)


module.exports = router
