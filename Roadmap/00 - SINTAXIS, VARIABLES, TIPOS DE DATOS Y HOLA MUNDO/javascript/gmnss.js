/*
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
*/

// JavaScript
// https://developer.mozilla.org/es/docs/Web/JavaScript

// Comentario de una línea en JavaScript

/*
    Comentario de varias
    líneas en JavaScript
*/

let myVariable = "valor de mi variable"
const myConstante = "JavaScript"

let var_number = 1
let var_float = 0.1
let var_string = "Texto"
let var_booleano = true
let var_null = null
let var_array = ["a", "b", "c", "d"]
let var_object = {letra1: "a", letra2: "b", letra3: "c"}
let var_object2 = [{letra: "a"},{letra: "b"}, {letra: "c"}]

console.log("number:", var_number, "es del tipo:", typeof var_number)
console.log("float:", var_float, "es del tipo:", typeof var_float)
console.log("string:", var_string, "es del tipo:", typeof var_string)
console.log("booleano:", var_booleano, "es del tipo:", typeof var_booleano)
console.log("null:", var_null, "es del tipo:", typeof var_null)
console.log("array:", var_array, "es del tipo:", typeof var_array)
console.log("object:", var_object, "es del tipo:", typeof var_object)
console.log("object2:", var_object2, "es del tipo:", typeof var_object2)

console.log(`¡Hola, ${myConstante}!`)