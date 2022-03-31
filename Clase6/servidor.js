// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello World');
// })

// const connectedServer = server.listen(8080, () => {
//   console.log(`Server running on port: ${connectedServer.address().port}`);
// })

const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

server.on('Error', error => console.log(`Error: ${error}`))

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/hola', (req, res) => {
  res.send({message: 'Welcome'})
})