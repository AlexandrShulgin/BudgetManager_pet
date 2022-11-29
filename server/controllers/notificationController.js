const {Notification} = require('../models/models')
const ApiError = require('../error/ApiError')


class NotificationController {
   async create(req, res, next) {
       try {
           const {name, date, amount, userId} = req.body
           const notification = await Notification.create({name, date, amount, userId})
           return res.json(notification)
       
       } catch (e) {
           next(ApiError.badRequest(e.message))
       }
    }

    async destroy(req, res, next) {
        try {
            const id = req.params.id
            const notification = await Notification.destroy({where: {id: id}})
            return res.json(notification)
    
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

   async getAll(req, res) {
       let notifications;
       const userId = req.params.userId
       notifications = await Notification.findAll({where: {userId: userId}})
       return res.json(notifications)
   }
}

module.exports = new NotificationController()