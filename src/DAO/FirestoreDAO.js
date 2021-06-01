const admin = require('firebase-admin');

const serviceAccount = require('../../assets/jobsity-challenge-a6061-83b3b642ec03.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

class FirestoreDao{
    constructor() {

    }

    async add(item) {
        let IdToUse = -1
        await db.collection('messages').get().then((snap) => {
            snap.forEach((doc) => {
                if (Number(doc.id) > IdToUse) {
                    IdToUse = doc.id
                }
            })
        })
        IdToUse++
        const itemToAdd = {id: IdToUse, timeStamp: Date.now(), ...item};

        const docToEdit = db.collection('messages').doc(String(IdToUse));
        await docToEdit.set(itemToAdd);

        return itemToAdd;
    }

    get(id) {
        return db.collection('messages').doc(String(id))
    }

    async getAll() {
        let retorno = []
        const snap = await db.collection('messages').get()
        snap.forEach((doc) => {
            retorno.push(doc.data())
        })
        return retorno
    }

    async verifyCredentials(cred) {
        let isValid = false;
        const snap = await db.collection('users').get()
        snap.forEach((doc) => {
            if (doc.data().userName === cred.userName && doc.data().password === cred.password) {
                isValid = true
            }
        })
        return isValid;
    }
}

module.exports = FirestoreDao

