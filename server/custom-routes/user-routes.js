let Boards = require('../models/board')
let Lists = require('../models/list')
let Cards = require('../models/card')
let Comments = require('../models/comment')

export default {
  userBoards: {
    path: '/userboards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Boards'
      Boards.find({creatorId: req.session.uid})
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  sharedBoards: {
    path: '/sharedboards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Shared Boards'
      console.log(req.headers)
      Boards.find({collaborators: {$in:[req.session.uid]}})
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  userLists: {
    path: '/userlists',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Lists'
      Lists.find({creatorId: req.session.uid})
        .then(lists => {
          res.send(handleResponse(action, lists))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
    userCards: {
    path: '/usercards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Cards'
      Cards.find({creatorId: req.session.uid})
        .then(cards => {
          res.send(handleResponse(action, cards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
    userComments: {
    path: '/usercomments',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Comments'
      Comments.find({creatorId: req.session.uid})
        .then(comments => {
          res.send(handleResponse(action, comments))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }

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