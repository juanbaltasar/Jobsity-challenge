const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server/*, {
    cors:{
        origin:'wss://localhost:3000',
        methods: ['GET', 'POST']
    }
}*/);
const port = 4000;
const cors = require('cors')
const path = require('path')
const messageRouter = require('./Routers/MessageRouter.js')
const loginRouter = require('./Routers/LoginRouter.js')
const StockQuoteBot = require('./Bot/StockQuoteBot.js')

const MessagesUCClass = require('./UseCases/MessagesUC.js');
const MessagesUC = new MessagesUCClass()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.post('/StockQuoteBot', (req, res) => {
    console.log(req.body.message)
    StockQuoteBot(req.body.message.slice(7))
    res.status(200).send('Received')
})

// app.get('/messages', (req, res) => {
//     res.json(MessagesUC.getAllMessages());
// })

// app.post('/messages', (req, res) => {
//     console.log(req.body)
//     const addedMessage = MessagesUC.addMessage(req.body)
//     res.status(200).send(addedMessage)
// })

app.use('/messages', messageRouter)
app.use('/login', loginRouter)

io.on('connection', (socket) => {
    socket.on('NewMessage', (arg) => {
        //console.log(`New Message: ${arg.message}`)
        MessagesUC.handleRecievedMessage(arg).then(() => {
            MessagesUC.getLastMessages().then((val) => {
                io.emit('NewMessage', val)
            })
        })
        
    })
})

app.set('io', io)

server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})