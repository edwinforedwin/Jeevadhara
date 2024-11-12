const express = require('express')
const sql = require('mssql')
const config = require('./database.json')
const cors = require('cors')
const bcryptjs = require('bcryptjs')
const CryptoJS = require("crypto-js")

const app = express()
const port = 4050
app.use(cors())
app.use(express.json())

app.post('/jeevadhara/api/usercreation',(req,res)=>{
    let username = req.body.fullname
    let mobileNumber = req.body.mobile_number
    let address = req.body.address
    let portal = req.body.portal
    let fromTime = req.body.from_time
    let toTime = req.body.to_time
    
})