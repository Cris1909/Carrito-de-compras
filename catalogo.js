//Arreglos del Local Storage
let juegos = JSON.parse(localStorage.getItem("juegos")) ?? [];
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
document.getElementById("elementos").textContent = carrito.length;
//Variables
let indice = 0;
let catalogo = document.getElementById("catalogo");
let add = document.getElementsByClassName("boton");
//Función para consultar si el juego ya ha sido añadido al carrito
let consultarCarrito = indice => carrito.some(element => element.nombre == juegos[indice].nombre);
//Mostrar los juegos almacenados
let listarJuegos = () => {
    let tabla = ``
    juegos.forEach(element =>{
        let boton, clase;
        if(consultarCarrito(indice)){          
            boton = "Añadido al carrito"
            clase = "guardado"; 
        } else {
            boton = "Añadir al carrito"
            clase = "add";
        }
        tabla +=
        `<section class="juego">
            <div class="card" style="width: 15.5rem;">
                <img class="card-img-top" height="300rem" src=${element.imagen} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${element.nombre}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Tipo:</b> ${element.tipo}</li>
                        <li class="list-group-item"><b>Año:</b> ${element.year}</li>
                        <li class="list-group-item"><b>Precio:</b> ${element.precio}</li>
                    </ul>
                    <button onclick="subirAlCarrito(${indice})" class="boton ${clase}" >${boton}</button>
                </div>
            </div>
        </section>`
        indice++;
    });
    document.getElementById("catalogo").innerHTML = tabla;
}
//Subir el juego seleccionado al carrito
let subirAlCarrito = (indice) => {
    let juego = juegos[indice];
    if(consultarCarrito(indice)){
        alert("Ya ha sido añadido");
    } else {
        alert("Añadido");
        carrito.push(juego);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        location.reload();
    }
}
window.addEventListener("load", () => {
    listarJuegos();
});

