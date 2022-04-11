function init(){

    darBienvenida();
    mostrarMenu();
    escribirMensaje();
}

function darBienvenida(){

    const myH1 = document.createElement("h1");
    myH1.innerHTML = "Bienvenido";
    document.body.appendChild(myH1);
}

function escribirMensaje(){

    const myP = document.createElement("p");
    myP.innerHTML = "Por favor, selecciona una categoria para continuar";
    document.body.appendChild(myP);
}

function mostrarMenu(){

    categorias.forEach((categoria)=>{
        
        const myBtn = document.createElement("button");
        myBtn.setAttribute("class", "styledBtn");
        myBtn.innerHTML=(categoria.nombre);
        document.body.appendChild(myBtn);
    })
}