const Router = require('express')
const router = new Router()
const notificationController = require('../controllers/notificationController')


router.post('/', notificationController.create)
router.get('/', notificationController.getAll)

module.exports = router