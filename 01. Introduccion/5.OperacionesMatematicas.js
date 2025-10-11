console.clear()
console.log(" ------------- Números y Operaciones Matemáticas en JavaScript -----------------")

// Code 
// 1. Tipo entero y decimal
const entero = 20
const decimal = 3.14
console.log(typeof(entero))
console.log(typeof(decimal)) 

// 2. Notación científica
const cientifico = 5e3
console.log(typeof(cientifico))

// 3. Infinitos and NaN(not a number)
const infinito = Infinity
const noEsUnNumero = NaN 

// Operaciones Aritméticas 
// 1. Suma, resta, multiplicación, división
let suma = 3+4
let resta = 10-5
let multiplicacion = 10*5
let division = 10/5 

// 2. Módulo y exponenciación 
let modulo = 20%6
let exponenciacion = 2**3

// Presición 
let resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))
console.log(resultado === 0.3) //compara a nivel de tipo y valor

// Operaciones avanzadas 
let raiz = Math.sqrt(16)
let valorAbsoluto = Math.abs(-10)
let numeroRamdon = Math.random() //genera un número aleatorio entre 0 y 1 

console.log(raiz)
console.log(valorAbsoluto)
console.log(numeroRamdon)