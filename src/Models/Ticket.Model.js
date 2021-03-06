const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    ticketid: { type: Number, unique: true, required: true },
    spotid: { type: mongoose.Schema.Types.ObjectId, ref: 'spot', required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    amount: { type: Number, max: 100, min: 10, required: true },
}, {
    versionKey: false
});

module.exports = mongoose.model('ticket', ticketSchema);