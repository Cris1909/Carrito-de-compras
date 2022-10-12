//Arreglos del Local Storage
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
document.getElementById("elementos").textContent = carrito.length;
//Variables
let indice = 0;
let total = 0;
//Mostrar el carrito
let listarCarrito = () => {
    let tabla = ``
    carrito.forEach(element => {
        let subtotal = parseInt(element.precio) * element.cantidad;
            tabla += `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.precio}</td>
                <td>
                    <button onclick="menosCantidad(${indice})" class="menos"><b>-</b></button>
                    ${element.cantidad}
                    <button onclick="masCantidad(${indice})" class="mas"><b>+</b></button>
                </td>
                <td>${subtotal}</td>
                <td>
                    <button onclick="eliminarJuego(${indice})" class="boton delete">Eliminar</button>
                </td>
            </tr>`
            total += subtotal;
            indice++;
    });
    document.getElementById("tabla").innerHTML = tabla;
    document.getElementById("total").textContent = total;
};
//Aumentar la cantidad del juego seleccionado
let masCantidad = i => {
    carrito[i].cantidad += 1;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
};
//Disminuir la cantidad del juego seleccionado
let menosCantidad = i => {
    if(carrito[i].cantidad > 1){
        carrito[i].cantidad -= 1;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        location.reload();   
    } else {
        eliminarJuego(i);
    };
};
//Eliminar el juego
let eliminarJuego = i => {
    if(confirm("¿Estás seguro?")){
        carrito.splice(i,1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        location.reload();
    };
};
//Finalizar la compra
let comprar = () => {
    if(total > 0){
        if(confirm("¿Estás seguro?")){
            alert("Comprado!!!");
        }
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        location.reload();
    } else {
        alert("Selecciona primero un juego");
    } 
}
window.addEventListener("load", () => {
    listarCarrito();
});