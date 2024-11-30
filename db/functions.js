const functions = {
    async add(table, params) {
        const Model = require('../models')[table]
        const result = await Model.create(params)
        return result
    },
    async get(table, params) {
        const Model = require('../models')[table]
        const result = await Model.findByPk(params.id)
        console.log(result)
        return result
    },
    async getAll(table, subTable="", fk="", params="") {
        const Model = require('../models')[table]
        let attributes = ""
        let include = ""
        let where = ""
        let order = ""

        
        if(subTable !== ""){
            const SubModel = require('../models')[subTable]

            switch(table){
                case "User":
                    attributes = {
                        include:[
                            [Model.sequelize.fn('',Model.sequelize.col(subTable + '.firstname')),'FirstName'],
                            [Model.sequelize.fn('',Model.sequelize.col(subTable + '.lastname')),'LastName']
                        ]
                    }
                    order = [
                        ['email', 'ASC'],
                    ]
                    break
                default:
                    break
            }

            include = [
                {
                    model: SubModel, attributes:[]
                }
            ]
        }

        if(fk !== ""){
            where = { [fk]: params[fk] }
        }
        
        const result = await Model.findAll({
            attributes : attributes,
            raw: true,
            subQuery: false,
            include: include,
            where: where,
            order: order
        })
        return result
    },
    async delete(table, params) {
        const Model = require('../models')[table]
        const result = Model.destroy({ where: { id : params.id } })
        return result
    },
    async update(table, params) {
        const Model = require('../models')[table]
        const result = await Model.update(params, { where: { id: params.id, }, })
        return result
    }
}
module.exports = functions