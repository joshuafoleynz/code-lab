// Import functions
import express from 'express'
import * as Path from 'path'

// Declare server varible
const server = express()

// Send a message to the server
server.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

// Export server varible
export default server
