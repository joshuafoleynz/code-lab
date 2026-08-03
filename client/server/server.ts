// Import express
import express from 'express'

// Declare port and server varibles
const port = 3000
const server = express()

// Create a server get and send request
server.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})
