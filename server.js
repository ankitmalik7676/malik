const express = require('express')
const http = require ('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use('/' , express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('connection', socker.id)

    socket.on('colorit', (data) => {
     io.emit('colorit', data) 
 })
}) 


server.listen(2424, () => {
    console.log('server started on http://localhost:2424')
})