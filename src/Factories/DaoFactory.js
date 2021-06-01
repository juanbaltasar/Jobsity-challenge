const MemoryDao = require('../DAO/MemoryDao.js')
const FirestoreDao = require('../DAO/FirestoreDAO.js')

function DaoFactory(param) {
    switch (param) {
        case 'memory':
            return new MemoryDao();
        
        case 'firestore':
            return new FirestoreDao();
    
        default:
            throw new Error('DAO does not exist')
            break;
    }
}

module.exports = DaoFactory;