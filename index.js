const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, function(){
  console.log('the server is listening on port', port)
})