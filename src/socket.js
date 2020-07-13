module.exports = io => {
    io.on('connection', (socket) => {
        console.log("Someone connected to the main namespace")
        socket.emit('messageFromServer', { data: "Welcome to the socketio server" });
        socket.on('messageToServer', (dataFromClient) => {
            console.log(dataFromClient)
        })
    })

}