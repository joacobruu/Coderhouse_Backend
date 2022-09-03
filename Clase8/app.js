const express = require('express')
const userRouter = require('./routes/users')
const petRouter = require('./routes/pets')
const app = express()

//Esto es para que express entienda los JSON que le van a enviar
app.use(express.json())

//Para usar los archivos de la carpeta public
app.use(express.static('public'))

app.listen(8080, () => console.log('Server Up'));
app.use('/users', userRouter)

app.use('/pets', petRouter)
