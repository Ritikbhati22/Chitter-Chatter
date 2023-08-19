const mongoose = require('mongoose')
const message = mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },

}, {
    timestamps: true,
})
const Message = mongoose.model("Message", messageModel);
module.exports = Message;