const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

server.on('Error', error => console.error(`Error: ${error}`));

function sumar(num1, num2) {
  return num1 + num2;
}

app.get('/api/sumar/5/6', async (req, res) => {
  res.send(await sumar(5, 6))
})