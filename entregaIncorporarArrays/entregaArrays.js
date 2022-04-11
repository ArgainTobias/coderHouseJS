
function calcularPrecioCuotas(){

    let cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas mediante las que desea abonar (1, 3, 6 o 12): ")) 

    while(cantidadCuotas !== 1 && cantidadCuotas !== 3 && cantidadCuotas !== 6 && cantidadCuotas !== 12){

        cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas mediante las que desea abonar (1, 3, 6 o 12): "))

    }

    if(art === 1){

        precio = monitores[0].precio;
        let totalCuotas = precio/cantidadCuotas;
        alert(`Usted debe abonar ${cantidadCuotas} cuotas de $${totalCuotas}`);
        

    }
    else if(art === 2){

        precio = monitores[1].precio;
        let totalCuotas = precio/cantidadCuotas;
        alert(`Usted debe abonar ${cantidadCuotas} cuotas de $${totalCuotas}`);
        

    }
    else if(art === 3){

        precio = monitores[2].precio;
        let totalCuotas = precio/cantidadCuotas;
        alert(`Usted debe abonar ${cantidadCuotas} cuotas de $${totalCuotas}`)
        
    }
}

const monitores = [

    {
        marca: "Philips",
        modelo: "241V8L/55",
        tamaño: 24,
        precio: 29500
    },
    {
        marca: "LG",
        modelo: "24GN600-B 144Hz",
        tamaño: 24,
        precio: 65100
    },
    {
        marca: "LG",
        modelo: "27MK400H-B",
        tamaño: 27,
        precio: 42800
    }
]

alert("Este programa calculará el valor de cada cuota para el articulo que usted desee")

let art = parseInt(prompt("Ingrese el articulo que desee comprar: \n 1) Monitor Philips 24 241V8L/55 ($29.500) \n 2) Monitor LG Gamer 24 24GN600-B 144Hz ($65.100) \n 3) Monitor LG LED 27 27MK400H-B HDMI ($42.800) "))

while(art !== 1 && art !== 2 && art !== 3){

    art = parseInt(prompt("Ingrese el articulo que desee comprar: \n 1) Monitor Philips 24 241V8L/55 ($29.500) \n 2) Monitor LG Gamer 24 24GN600-B 144Hz ($65.100) \n 3) Monitor LG LED 27 27MK400H-B HDMI ($42.800) "))

}

calcularPrecioCuotas();