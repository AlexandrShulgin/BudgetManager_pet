const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const walletRouter = require('./walletRouter')
const historyRouter = require('./historyRouter')
const notificationRouter = require('./notificationRouter')
const statRouter = require('./statRouter')




router.use('/user', userRouter)
router.use('/wallet', walletRouter)
router.use('/history', historyRouter)
router.use('/notification', notificationRouter)
router.use('/stat', statRouter)


module.exports = router