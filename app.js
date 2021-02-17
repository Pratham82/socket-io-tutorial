const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  console.log('new User connected')
  socket.on('chat message', message => {
    console.log(`message: ${message}`)
    io.emit('chat message', message)
  })
})

http.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`)
})
