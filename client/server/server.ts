// Import express
import express from 'express'

// Declare server varible
const server = express()

// Create a server get and send request
server.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

// Export server varible
export default server