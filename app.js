const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Hello World!');
});

server.listen(3000);

const io = socketio.listen(server);

io.sockets.on('connection', (socket) => {
    console.log('Kullanıcı bağlandı.');
    socket.on('disconnect', () => {
        console.log('Kullanıcı ayrıldı.');
    });

    socket.on('mesajGonder', (data) => {
        socket.broadcast.emit('mesajCanli', data);
    });
});