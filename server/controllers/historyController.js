 const {History} = require('../models/models')
 const ApiError = require('../error/ApiError')
 

 class HistoryController {
    async create(req, res, next) {
        try {
            const {name, description, category, date, type, amount, walletId} = req.body
            const history = await History.create({name, description, category, date, type, amount, walletId})
            return res.json(history)
        
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        let history;
        const {walletId} = req.body
        history = await History.findAll({where: {walletId}})
        return res.json(history)
    }
}

module.exports = new HistoryController()