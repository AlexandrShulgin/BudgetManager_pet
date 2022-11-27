const {Stat} = require('../models/models')
const ApiError = require('../error/ApiError')


class StatController {
   async create(req, res, next) {
       try {
           const {date, income, expense, diff, walletId} = req.body
           const stat = await History.create({date, income, expense, diff, walletId})
           return res.json(stat)
       
       } catch (e) {
           next(ApiError.badRequest(e.message))
       }
       
   }

   async getAll(req, res) {
       let stats;
       const {walletId} = req.body
       stats = await Stat.findAll({where: {walletId}})
       return res.json(stats)
   }
}

module.exports = new StatController()