import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	 creatorId: {type:ObjectId, ref:models.user.name},
	// Relations
	boardId: {type:ObjectId, ref:models.board.name, required: true},
	listId: { type: ObjectId, ref: models.list.name, required: true },
	comments:[{type: ObjectId, ref:models.comment.name}]
});

module.exports = mongoose.model(models.card.name, schema);