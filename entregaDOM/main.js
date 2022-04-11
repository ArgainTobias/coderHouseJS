let productosAComprar = [];
let cantidadCuotas = 0;
let totalCuotas = 0;
let art = 0;

function elegirArticulo(){

    art = parseInt(prompt("Ingrese el articulo que desee comprar: \n 1) Monitor Philips 24 241V8L/55 ($29.500) \n 2) Monitor LG Gamer 24 24GN600-B 144Hz ($65.100) \n 3) Monitor LG LED 27 27MK400H-B HDMI ($42.800) \n 4) Monitor gamer Samsung F24T35 LED 24 100V/240V ($3599)" ));

    while(art !== 1 && art !== 2 && art !== 3 && art !==4){

        art = parseInt(prompt("Ingrese el articulo que desee comprar: \n 1) Monitor Philips 24 241V8L/55 ($29.500) \n 2) Monitor LG Gamer 24 24GN600-B 144Hz ($65.100) \n 3) Monitor LG LED 27 27MK400H-B HDMI ($42.800) \n 4) Monitor gamer Samsung F24T35 LED 24 100V/240V ($3599)" ));
    }

    if(art === 1){
        productosAComprar.push(monitores[0]);
    }
    else if(art === 2){
        productosAComprar.push(monitores[1]);
    }
    else if(art === 3){
        productosAComprar.push(monitores[2]);
    }
    else if(art === 4){
        productosAComprar.push(monitores[3]);
    }
}


function calcularPrecioCuotas(){

    cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas mediante las que desea abonar (1, 3, 6 o 12): ")); 

    while(cantidadCuotas !== 1 && cantidadCuotas !== 3 && cantidadCuotas !== 6 && cantidadCuotas !== 12){

        cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas mediante las que desea abonar (1, 3, 6 o 12): "));

    }

    if(art === 1){

        precio = monitores[0].precio;
        totalCuotas = precio/cantidadCuotas;
        // alert(`Usted debe abonar ${cantidadCuotas} cuotas de $${totalCuotas}`);
        

    }
    else if(art === 2){

        precio = monitores[1].precio;
        totalCuotas = precio/cantidadCuotas;
        // alert(`Usted debe abonar ${cantidadCuotas} cuotas de $${totalCuotas}`);
        

    }
    else if(art === 3){

        precio = monitores[2].precio;
        totalCuotas = precio/cantidadCuotas;
        // alert(`Usted debe abonar ${cantidadCuotas} cuotas de $${totalCuotas}`)
        
    }
    else if(art === 4){

        precio = monitores[3].precio;
        totalCuotas = precio/cantidadCuotas;
    }
}

function darBienvenida(){

    let nombre = prompt(`Ingresa tu nombre: `);
    const myTitle = document.getElementById("titulo");
    myTitle.innerText += ` ${nombre}, AL CARRITO DE COMPRAS`;
}

function mostrarProductoCompra(){

    const compra = document.createElement("p");
    
    if(art === 1){
        
        compra.innerHTML = `El monitor que usted desea comprar es el modelo ${monitores[0].modelo} y deberá abonar ${cantidadCuotas} cuotas de $${totalCuotas}`;
        document.body.appendChild(compra);
    }
    else if(art === 2){

        compra.innerHTML = `El monitor que usted desea comprar es el modelo ${monitores[1].modelo} y deberá abonar ${cantidadCuotas} cuotas de $${totalCuotas}`;
        document.body.appendChild(compra);
    } 
    else if(art === 3){

        compra.innerHTML = `El monitor que usted desea comprar es el modelo ${monitores[2].modelo} y deberá abonar ${cantidadCuotas} cuotas de $${totalCuotas}`;
        document.body.appendChild(compra);
    }
    else if(art === 4){
        compra.innerHTML = `El monitor que usted desea comprar es el modelo ${monitores[3].modelo} y deberá abonar ${cantidadCuotas} cuotas de $${totalCuotas}`;
        document.body.appendChild(compra);
    }
}

function init(){
    darBienvenida();
    alert("Este programa calculará el valor de cada cuota para el articulo que usted desee");
    elegirArticulo();
    calcularPrecioCuotas();
    mostrarProductoCompra();
}

init();
