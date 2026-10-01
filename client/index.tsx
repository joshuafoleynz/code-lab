// Import server function
import server from '../server/server.ts'

// Create port
const port = 3000

// Listen to what port is on
server.listen(port, () => {
  console.log('The server is listening on port', port)
})
