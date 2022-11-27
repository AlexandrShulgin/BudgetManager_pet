const Router = require('express')
const router = new Router()
const walletController = require('../controllers/walletController')


router.post('/create', walletController.create)
router.post('/update/:id', walletController.update)
router.post('/destroy/:id', walletController.destroy)
router.get('/getall/:userId', walletController.getAll)

module.exports = router