const messages = []
const cred = [{
    user: 'admin',
    password: 'admin'
}]
id = 0

class MemoryDao{
    constructor() {

    }

    add(item) {
        console.log(Date.now())
        const itemToAdd = {id, timeStamp: Date.now(), ...item};

        messages.push(itemToAdd);
        id++;

        return itemToAdd;
    }

    get(id) {
        return messages.find( element => element.id === id )
    }

    getAll() {
        return messages
    }

    verifyCredentials(cred) {

    }
}

module.exports = MemoryDao;