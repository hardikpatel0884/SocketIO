let socket=io();
socket.on('connect',()=>{
    console.log('bhai bhai maja padi')

    socket.emit('createEmail',{
        to:"to@gmail.com",
        text:"hello"
    })
});

socket.on('disconnect',()=>{
    console.log('kya chalya')
})

socket.on('newEmail',(email)=>{
    console.log('New email ',email);
})