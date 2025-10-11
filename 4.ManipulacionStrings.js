console.clear()
console.log(" ------------------ Manipulacion de Strings en JavaScript ------------------ ")

// Code 
// Tipo de dato: string 
let string1 = "Hola, mundo" //uso de comillas simples 
let string2 = 'JavaScript es genial' //uso de comillas dobles 
let string3 = `${string1} feliz :)` //concatenando strings con comillas invertidas 
let string4 = string1 + " " + string2


// Impresión de los strings en consola 
console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

// Métodos en strings 
let frase = "JavaScript es extremadamente genial"
console.log(frase)
// Imprimir el tamaño de la frase
console.log("La frase tiene " + frase.length + " caracteres")
// Imprimir la frase en minúsculas
console.log(frase.toLowerCase())
// Imprimir frase en mayusculas
console.log(frase.toUpperCase())
// Imprimir un substring 
console.log(frase.substring(0,10)) // el último índice mas 1

// ---------------- Práctica: Creación de strigns ------------------------------
let saludo1 = "Hola amigos"
let saludo2 = "Estoy aprendiendo JavaScript"
let saludo3 = `\n   ${saludo1} desde hoy ${saludo2} en Platzi`

console.log(saludo3)
console.log(saludo3.length)
console.log(saludo3.toLowerCase())
console.log(saludo3.toUpperCase())
console.log(saludo2.substring(0,18))