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