alert("Desafío algoritmo con ciclos")

const palabra = prompt("Elije la palabra que deseas imprimir en consola: ")
const cantidad = parseInt(prompt("Ingresa la cantidad de veces que desees imprimirla: "))


for(i = 1; i <= cantidad; i++){

    console.log(`${palabra} ${i}`)

}