const express = require('express');

const MessagesUCClass = require('../UseCases/MessagesUC.js');
const MessagesUC = new MessagesUCClass()

let messageRouter = express.Router()

let io;

messageRouter.get('/', (req, res) => {
    MessagesUC.getLastMessages().then((val) => {
        res.json(val)
    })
})

messageRouter.post('/', (req, res) => {
    io = req.app.get('io')
    //console.log(req.body)
    let addedMessage
    MessagesUC.handleRecievedMessage(req.body).then((val) => {
        addedMessage = val
        MessagesUC.getLastMessages().then((val) => {
            io.emit('NewMessage', val)
        })
        res.status(200).send(addedMessage)
    })
})

module.exports = messageRouter