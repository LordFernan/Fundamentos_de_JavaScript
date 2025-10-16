console.clear()
console.log("--------------- Uso del condicional Switch en Programación -----------------")

const prompt = require("prompt-sync")({sigint:true})

// Code 

// caso de buscar una fruta
let fruta = prompt("Ingrese una fruta: ")
switch(fruta){ // === 
    case "Manzana":
        console.log("Es una manzana")
        break
    case "Pera":
        console.log("Es una pera")
        break
    case "Uva":
        console.log("Es una uva")
        break
    default:
        console.log("Fruta no encontrada") // no es necesario el break ya que es la respuesta por defecto
}
console.log()

// Reto: 🎯 Objetivo:
//Construir un programa que actúe como un mini intérprete lógico capaz de evaluar distintas operaciones según una instrucción del usuario.
//Deberás usar switch para decidir qué tipo de operación ejecutar.

const input = prompt("Ingrese una instrucción: ").toLowerCase();
const datos = input.split(" ");
const toBool = (v) => v === "true";

let resultado;

switch (datos[0]) {
  case "and":
    resultado = toBool(datos[1]) && toBool(datos[2]);
    break;
  case "or":
    resultado = toBool(datos[1]) || toBool(datos[2]);
    break;
  case "not":
    resultado = !toBool(datos[1]);
    break;
  case "xor":
    resultado = toBool(datos[1]) !== toBool(datos[2]);
    break;
  case "compare":
    const a = Number(datos[1]);
    const b = Number(datos[2]);
    resultado = a === b ? "igual" : a < b ? "menor" : "mayor";
    break;
  case "math":
    const x = Number(datos[1]);
    const op = datos[2];
    const y = Number(datos[3]);
    switch (op) {
      case "+": resultado = x + y; break;
      case "-": resultado = x - y; break;
      case "*": resultado = x * y; break;
      case "/": resultado = x / y; break;
      case "%": resultado = x % y; break;
      default: resultado = "Operador inválido";
    }
    break;
  case "grade":
    const nota = Number(datos[1]);
    switch (true) {
      case nota >= 90: resultado = "A"; break;
      case nota >= 80: resultado = "B"; break;
      case nota >= 70: resultado = "C"; break;
      case nota >= 60: resultado = "D"; break;
      default: resultado = "F";
    }
    break;
  default:
    resultado = "Instrucción no válida.";
}

console.log(`Resultado: ${resultado}`);
