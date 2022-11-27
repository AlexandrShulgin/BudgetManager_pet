const Router = require('express')
const router = new Router()
const walletController = require('../controllers/walletController')


router.post('/create', walletController.create)
router.post('/destroy', walletController.destroy)
router.get('/getall/:userId', walletController.getAll)

module.exports = router