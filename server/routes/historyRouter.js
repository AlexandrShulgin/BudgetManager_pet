const Router = require('express')
const router = new Router()
const historyController = require('../controllers/historyController')


router.post('/create', historyController.create)
router.post('/destroy/:id', historyController.destroy)
router.get('/getall/:walletId/:sortType', historyController.getAll)

module.exports = router