// Import express
import express from 'express'

// Declare port and server varibles
const port = 3000
const server = express()

// Create a server get and send request
server.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

// Console.log to listen what server were on
server.listen(port, () => {
  console.log('The server is listening on port', port)
})
