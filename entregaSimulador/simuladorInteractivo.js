function precioCuotas(){

    let precio = 0

    let art1 = 29500
    let art2 = 65100
    let art3 = 42800

    alert("Este programa calculará el valor de cada cuota para el articulo que usted desee")

    let articulo = parseInt(prompt("Ingrese el articulo que desee comprar: \n 1) Monitor Philips 24 241V8L/55 ($29.500) \n 2) Monitor LG Gamer 24 24GN600-B 144Hz ($65.100) \n 3) Monitor LG LED 27 27MK400H-B HDMI ($42.800) "))

    while(articulo !== 1 && articulo !== 2 && articulo !== 3){

        articulo = parseInt(prompt("Ingrese el articulo que desee comprar: \n 1) Monitor Philips 24 241V8L/55 ($29.500) \n 2) Monitor LG Gamer 24 24GN600-B 144Hz ($65.100) \n 3) Monitor LG LED 27 27MK400H-B HDMI ($42.800) "))

    }

    let cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas mediante las que desea abonar (1, 3, 6 o 12): ")) 

    while(cantidadCuotas !== 1 && cantidadCuotas !== 3 && cantidadCuotas !== 6 && cantidadCuotas !== 12){

        cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas mediante las que desea abonar (1, 3, 6 o 12): "))

    }

    if(articulo === 1){

        precio = art1

    }
    else if(articulo === 2){

        precio = art2

    }
    else if(articulo === 3){

        precio = art3
    }

    // if(cantidadCuotas === 1){

    //     precio /= 1

    // }
    // else if(cantidadCuotas === 3){

    //     precio /= 3 

    // }
    // else if(cantidadCuotas === 6){

    //     precio /= 6

    // }
    // else if(cantidadCuotas === 12){

    //     precio /= 12

    // }

    totalCuotas = precio/cantidadCuotas 

    alert(`Usted deberá abonar ${cantidadCuotas} cuotas de $${totalCuotas} `)

}

precioCuotas()

