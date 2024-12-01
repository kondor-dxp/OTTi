const functions = {
    async add(table, params) {
        const Model = require('../models')[table]
        const result = await Model.create(params)
        return result
    },
    async get(table, params) {
        const Model = require('../models')[table]
        let result = ""

        switch (table){
            case "User":
                const Group = require('../models')["Group"]
                const user = await Model.findByPk(params.id, {
                    include:[Group]
                })
                for(let group of user.Groups){
                    result += "<span class='badge badge-pill badge-info'>" + group.dataValues.name + "</span> "
                }
                break
            default:
                result = await Model.findByPk(params.id)
                break
        }
        return result
    },
    async getAll(table, subTable="", fk="", params="") {
        const Model = require('../models')[table]
        let attributes = ""
        let include = ""
        let where = ""
        let order = ""
        let group = ""
        
        if(subTable !== ""){
            const Person = require('../models')[subTable[0]]
            // const Group = require('../models')[subTable[1]]

            switch(table){
                case "User":
                    attributes = {
                        include:[
                            [Model.sequelize.col(subTable[0] + '.firstname'),'FirstName'],
                            [Model.sequelize.col(subTable[0] + '.lastname'),'LastName'],
                            [Model.sequelize.col(subTable[0] + '.phone'),'Phone'],
                            // [Model.sequelize.col('Groups.UserGroups.GroupId'),'Group']
                        ]
                    }
                    order = [
                        ['id', 'ASC'],
                    ]
                    // group = [table + '.id']
                    break
                default:
                    break
            }

            include = [
                {
                    model: Person, attributes:[]
                },
                // {
                //     model: Group, attributes:[]
                // }
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
            order: order,
            group: group
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