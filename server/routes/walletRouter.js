const Router = require('express')
const router = new Router()
const walletController = require('../controllers/walletController')


router.post('/', walletController.create)
router.get('/', walletController.getAll)
router.get('/:id', walletController.getOne)

module.exports = router