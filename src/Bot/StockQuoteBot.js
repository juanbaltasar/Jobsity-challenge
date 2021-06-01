const axios = require('axios')
const RabbitMQManagerClass = require('../MQ/RabbitMQManager.js')
RabbitMQManager = new RabbitMQManagerClass();

function StockQuoteBot(stockCode) {
    const urlToCall = `https://stooq.com/q/l/?s=${stockCode}&f=sd2t2ohlcv&h&e=csv`
    axios.get(urlToCall).then(res => {
        RabbitMQManager.enableReceiveMessage()
        RabbitMQManager.sendMessage(`${stockCode.toUpperCase()} quote is $${res.data.split(',')[11]} per share`)
    })
}

module.exports = StockQuoteBot;