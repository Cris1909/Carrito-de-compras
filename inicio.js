//Arreglos del Local Storage
let juegos = JSON.parse(localStorage.getItem("juegos")) ?? [];
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
document.getElementById("elementos").textContent = carrito.length;
//Creación del objeto juego
let guardarJuego = (nombre,tipo,year,precio,imagen) => {
    let juego = {
        nombre,
        tipo,
        year,
        precio,
        imagen,
        cantidad: 1
    };
    juegos.push(juego);
    localStorage.setItem("juegos", JSON.stringify(juegos));
};
//Capturando datos de Formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault;
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let year = document.getElementById("year").value;
    let precio = document.getElementById("precio").value;
    let imagen = document.getElementById("imagen").value;
    guardarJuego(nombre,tipo,year,precio,imagen);
});