// Import functions
import express from 'express'

// Declare server varible
const server = express()

// Request JSON in the request body
server.use(express.json())

// Export server varible
export default server
