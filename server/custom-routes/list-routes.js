let Cards = require('../models/card')

export default {
    listCards: {
        path:'/list/:id/cards',
        reqType: 'get',
        method(req,res,next){
            console.log(req.params.id)
            let action = 'Find List Cards'
            Cards.find({listId :req.params.id})
            .then(cards=>{
                res.send(handleResponse(action, cards))
            }).catch(error=> {
                return next(handleResponse(action,null, error))
            })
        }
    }
}

function handleResponse(action, data, error){
    var response ={
        action:action,
        data:data
    }
    if(error){
        response.error = error
    }
    return response
}