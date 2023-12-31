const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: 'postgres',//process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'todoapp'
})

module.exports = pool