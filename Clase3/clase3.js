const operacion = (unaFuncion, a, b) => unaFuncion(a, b)

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b
const modulo = (a, b) => a % b

console.log(operacion(suma, 2, 7))
console.log(operacion(resta, 2, 7))
console.log(operacion(multiplicacion, 2, 7))
console.log(operacion(division, 2, 7))
console.log(operacion(modulo, 2, 7))