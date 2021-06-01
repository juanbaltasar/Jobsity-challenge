const DaoFactory = require('../Factories/DaoFactory.js')

//const DAO = DaoFactory('memory')
const DAO = DaoFactory('firestore')

class LoginUC {

    async verifyLogin(cred) {
        return await DAO.verifyCredentials(cred)
    }
}

module.exports = LoginUC;