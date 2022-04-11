getInput();

function getInput(){
    
    const nombre = document.getElementById("nombre");
    const titulo = document.getElementById("titulo");

    titulo.innerText = `Bienvenido, ${nombre.value}`;


}