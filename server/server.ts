// Import functions
import * as express from 'express';
import * as Path from 'path'

// Declare server varible
const server = express()

// Request JSON in the request body
server.use(express.json())

// req.body for the request body
// const newObj = req.body

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
server.get('/:username/:repo', (req, res) => {
  res.send('Username: ' + req.params.username + ', Repo: ' + req.params.repo)
})

// Best widget
server.get('/:id', (req, res) => {
  const id = req.params.id
  const widgetObj = {
    id: id,
    name: 'The best widget',
  }
  res.json(widgetObj)
})

// Export server varible
export default server
