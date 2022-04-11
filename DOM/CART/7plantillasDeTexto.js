modificarPlantilla();

function modificarPlantilla(){

    const contenedor = document.getElementById("lista");
    const nombre = prompt("Ingresa un nombre");
    contenedor.innerHTML = `<div>
                            <h3>${nombre}</h3>
                            <p>Esto es un carrito de compras</p>
                            </div>
    `
    const myUl = document.createElement("ul");

    categorias.forEach((categoria)=>{

        myUl.innerHTML += `<li>nombre categoria: ${categoria.nombre}<br>
                            Id categoria: ${categoria.id}</li>`
    });

    contenedor.appendChild(myUl);
}

