// Import functions
import express from 'express'
import * as Path from 'path'

// Declare server varible
const server = express()

// Create a server get and send request
server.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

// Export server varible
export default server
