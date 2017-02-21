import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	body: { type: String, required: true },
	created: { type: Number, default: Date.now() },
	creatorId: {type:ObjectId, ref:models.user.name},
	// Relations
	cardId: { type: ObjectId, ref: models.card.name, required: true }
});

module.exports = mongoose.model(models.comment.name, schema);