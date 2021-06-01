const express = require('express');

const LoginUCClass = require('../UseCases/LoginUC.js')
const LoginUC = new LoginUCClass()

const loginRouter = express.Router()

loginRouter.post('/verify', (req, res) => {
    LoginUC.verifyLogin(req.body).then((value) => {
        res.json({ isValid: value })
    })
})

module.exports = loginRouter