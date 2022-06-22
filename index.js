import { Server } from 'socket.io'

const io = new Server({ cors: { origin: '*' } })

io.on('connection', (socket) => {
  console.log(`connect ${socket.id}`)

  socket.on('disconnect', () => {
    console.log(`disconnect ${socket.id}`)
  })
})

io.listen(3000)
