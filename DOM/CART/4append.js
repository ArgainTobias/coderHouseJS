pegarNodos();
function pegarNodos(){

    let myUl = document.createElement("ul");
    myUl.innerHTML = "<li>Item1</li><li>Item1</li>";

    const lista = document.getElementById("lista");

    lista.append(myUl);
}