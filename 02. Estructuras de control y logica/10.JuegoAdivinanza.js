console.clear()
console.log("--------------------- Juego de Adivinanza --------------------------")

const prompt = require("prompt-sync")({sigint:true})

// Code 
// Obtener un numero de forma aleatoria 
const numeroSecreto = Math.floor(Math.random()*10+1)

const numeroJugador = parseInt(prompt("Adivina un número del 1 al 10: "))
if(numeroJugador === numeroSecreto){
    console.log("Adivinaste el número")
} else if(numeroJugador>numeroSecreto){
    console.log("El número es menor")
} else {
    console.log("El número es mayor")
}
console.log()
console.log(numeroSecreto)


// Logro: creación de un juego de adivinanza en javascript usando estructuras condicionales