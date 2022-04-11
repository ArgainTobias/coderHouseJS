setData();

function setData(){

    let nombre = prompt(`Ingresa tu nombre: `)
    //Get element by id
    const myTitle = document.getElementById("titulo");
    myTitle.innerText = `BIENVENIDO ${nombre}, AL CARRITO DE COMPRAS`;

    //Get Elements By ClassName
    const contenedores = document.getElementsByClassName("contenedor"); //contenedores no tiene la propiedar.innertext porque es un HTMLCOLLECTION en vez de HTMLELEMENT
    
    for(contenedor of contenedores){

        contenedor.innerText = `VAMOS A SALUDARTE ${nombre}`;
    }
    

}