// Import functions
import express from 'express'
import * as Path from 'path'

// Declare server varible
const server = express()

// Send html file to the server
server.get('/', (req, res) => {
  res.sendFile(Path.join(process.cwd(), '../index.html'))
})

// Req object

// Export server varible
export default server
