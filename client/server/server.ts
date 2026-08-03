// Import functions
import express from 'express'
import Path from 'path'

// Declare server varible
const server = express()

// Send html file to the server
server.get('/', (req, res) => {
  res.sendFile(Path.resolve('.../index.html'))
})

// Export server varible
export default server

// Update: Up to doing responding with a file in the server get request which is currently not working.