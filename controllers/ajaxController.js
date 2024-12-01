const functions = require('../db/functions')

const ajaxController = {
    async call(req, res) {

        // VARIABILI COMUNI A TUTTI I CONTROLLER
        const route = "home"
        const session = require('../controllers/sessionController');

        // VARIABILI SPECIFICHE DEL CONTROLLER
        ajax = req.params.ajax

        switch(ajax){
            case "addUser":{
                const data = req.body
                try {
                    const result = await functions.add("User", data)
                    
                    // RESTITUZIONE DEL JSON ELABORATO
                    const status = result ? 200 : 400
                    res.status(status).json(result)
                } catch (error) {

                    // GESTIONE DEGLI ERRORI DELLA CHIAMATA AJAX
                    const status = 500
                    res.status(status).json(error)
                }
                break
            }
            case "getUserGroups":{
                const data = req.body
                try {
                    const result = await functions.get("User", data)
                    // console.log(result)
                    
                    // RESTITUZIONE DEL JSON ELABORATO
                    const status = result ? 200 : 400
                    res.status(status).json(result)
                } catch (error) {

                    // GESTIONE DEGLI ERRORI DELLA CHIAMATA AJAX
                    const status = 500
                    res.status(status).json(error)
                }
                break
            }
            default:

                // RENDER DELLA PAGINA HTML SENZA DATI
                let page = {  }
                res.render('template', { page, route, session })
                break
        }
    }
}
module.exports = ajaxController