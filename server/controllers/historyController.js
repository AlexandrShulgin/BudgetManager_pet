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

    async destroy(req, res, next) {
        try {
            const id = req.params.id
            const history = await history.destroy({where: {id: id}})
            return res.json(history)
    
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let history;
        const walletId = req.params.walletId
        const sortType = req.params.sortType
        switch (sortType) {
            case "fromHigherDate":
                history = await History.findAll({where: {walletId: walletId}, order: [["date", "DESC"]]})
                break

            case "fromLowerDate":
                history = await History.findAll({where: {walletId: walletId}, order: [["date", "ASC"]]})
                break
            
            case "fromHigherAmount":
                history = await History.findAll({where: {walletId: walletId}, order: [["amount", "DESC"]]})
                break
            
            case "fromLowerAmount":
                history = await History.findAll({where: {walletId: walletId}, order: [["amount", "ASC"]]})
                break
        }
        return res.json(history)
    }
 }

module.exports = new HistoryController()