import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created: { type: Number, default: Date.now() },
  creatorId: {type:ObjectId, ref:models.user.name},
  collaborators:[{type:ObjectId, ref:models.user.email}],
  // RELATIONS
  lists:[{type: ObjectId, ref: models.list.name}]
});





module.exports = mongoose.model(models.board.name, schema);