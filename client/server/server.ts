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
{
  query: {
    name: 'value'
  }
}

// Retrieve who's sending querys
server.get('/webapps', (req, res) => {
  const queryPerson = req.query.person
  res.send(queryPerson + ' is building web applications.')
})

// Route parameters

// Export server varible
export default server
