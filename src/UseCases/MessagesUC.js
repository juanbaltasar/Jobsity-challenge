const DaoFactory = require('../Factories/DaoFactory.js')
const StockQuoteBot = require('../Bot/StockQuoteBot.js')

//const DAO = DaoFactory('memory')
const DAO = DaoFactory('firestore')

class MessagesUC {

    async getLastMessages() {
        const messages = await DAO.getAll();
        messages.sort((a, b) => {
            if(a.timeStamp > b.timeStamp) return -1
            if(a.timeStamp < b.timeStamp) return 1
            return 0
        })
        return messages.slice(0, 50).reverse()
    }

    async handleRecievedMessage(item) {
        return await DAO.add(item)
    }
}

module.exports = MessagesUC;