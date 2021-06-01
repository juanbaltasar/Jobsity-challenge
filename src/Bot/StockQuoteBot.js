const axios = require('axios')
const RabbitMQManagerClass = require('../MQ/RabbitMQManager.js')
RabbitMQManager = new RabbitMQManagerClass();

function StockQuoteBot(stockCode) {
    //console.log(stockCode)
    const urlToCall = `https://stooq.com/q/l/?s=${stockCode}&f=sd2t2ohlcv&h&e=csv`
    axios.get(urlToCall).then(res => {
        //console.log(res.data.split(','))
        //console.log(`${stockCode.toUpperCase()} quote is $${res.data.split(',')[11]} per share`)
        RabbitMQManager.enableReceiveMessage()
        RabbitMQManager.sendMessage(`${stockCode.toUpperCase()} quote is $${res.data.split(',')[11]} per share`)
    })
}

module.exports = StockQuoteBot;