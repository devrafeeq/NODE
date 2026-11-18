const express = require('express')3
const app = express()


app.get('/home', (request, response) => {
    response.send('Welcome To Our Server')
})


app.get('/html', (request, response) =>{
    response.sendFile(__dirname + "/index.html")
})

let portNumber = 3075   ;

app.listen(portNumber,() => {
    console.log('Server Started')
})