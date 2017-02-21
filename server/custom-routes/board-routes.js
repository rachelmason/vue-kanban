let Lists = require('../models/list')
let Cards = require('../models/card')
let Boards = require('../models/board')
let Users = require('../models/user')


export default {
    boardLists: {
        path: '/board/:id/lists',
        reqType: 'get',
        method(req, res, next) {
            console.log(req.params.id)
            let action = 'Find Board Lists'
            Lists.find({ boardId: req.params.id })
                .then(lists => {
                    res.send(handleResponse(action, lists))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },

    boardCards: {
        path: '/board/:id/cards',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Board Cards'
            Cards.find({ boardId: req.params.id })
                .then(cards => {
                    res.send(handleResponse(action, cards))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },

    addCollabs: {
        path: '/board/:id/invite',
        reqType: 'post',
        method(req, res, next) {
            let action = 'Add a collaborator'
            let foundUser
            let foundBoard
            Users.findOne({ email: req.body.email })
                .then(user => {
                    foundUser = user._doc
                    return Boards.findById(req.params.id)
                })
                .then(board => {
                    foundBoard = board._doc
                    board.collaborators.push(foundUser._id)
                    return board.save()
                })
                .then((board) => {
                    res.send(handleResponse(action, board))
                })
                .catch(error => {
                    res.send(handleResponse(action, null, error))
                })

        }

    }

    //post board/id/name || email
    //only creaters and collaborators see and do things
}



function handleResponse(action, data, error) {

    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}