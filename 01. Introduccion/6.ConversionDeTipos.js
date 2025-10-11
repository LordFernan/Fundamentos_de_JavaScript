console.clear()
console.log("--------------------- Conversion de Tipos en JavaScript ---------------------")

// Code 
 // convercion implicita -> La hace el lenguaje, por ejemplo: 2- true = 3
 // conversion explicita -> La implementa el programador 
 // Javascript es de tipado débil

 // Ejemplo de conversion explicita 
 let booleano = true
 let booleanoToString = String(booleano)
 console.log(typeof(booleanoToString))
 let booleanToNumber = Number(booleano)
 console.log(typeof(booleanToNumber))
 console.log("\n")
// Clase 2 del mismo tema 
// Conversion de tipos de forma explicita 

let cadena = "20"
console.log(cadena)
let numero = Number(cadena)
console.log(typeof(numero))
console.log(numero)

// conversión a flotante 
let decimal = "40.32"
console.log(decimal)
console.log(typeof decimal)
let numeroDecimal = Number(decimal)
console.log(numeroDecimal)
console.log(typeof numeroDecimal)

// Convertir a binario
let binario = "1010"
let num = parseInt(binario,2)
console.log(num)
console.log(typeof num)

// Type casting de forma implicita 
let suma = 5 + "3"
console.log(suma)
console.log(typeof suma)

let sumaConBooleanos = "10" + true
console.log(sumaConBooleanos)
console.log(typeof sumaConBooleanos)

let sumaConNumero = 20 + true + true 
console.log(sumaConNumero)
console.log(typeof sumaConNumero)

// otro ejemplo
console.log("")
let stringValue = "10"
let numberValue = 10
let boolenaValue = true 
let resultado = stringValue + numberValue + boolenaValue
console.log(resultado)
console.log(typeof resultado)

// Reglas de las conversiones de tipos implicitas hechas por javascript
    // Si hay un string en la expresion, concatena 
    // Si no hay strings en la expresión, suma 


// Ejercicio de Practica
console.log("")
const newNum = "596"
const numeroConvertido = parseInt(newNum)
console.log(typeof newNum)
console.log(typeof numeroConvertido)

