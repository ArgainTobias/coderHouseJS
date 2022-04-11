setData();

function setData(){

    let nombre = prompt(`Ingresa tu nombre: `)
    //Get element by id
    const myTitle = document.getElementById("titulo");
    myTitle.innerHTML = `<span style="color:red">BIENVENIDO</span> ${nombre}, AL CARRITO DE COMPRAS`;

    //Get Elements By ClassName
    const contenedores = document.getElementsByClassName("contenedor"); //contenedores no tiene la propiedar.innertext porque es un HTMLCOLLECTION en vez de HTMLELEMENT
    
    for(contenedor of contenedores){

        contenedor.innerHTML = `<h5>VAMOS A SALUDARTE ${nombre}</h5>`;
    }
    

}