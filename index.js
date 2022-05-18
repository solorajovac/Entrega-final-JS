localStorage.setItem('carrito', JSON.stringify([]))
let divProductos = document.getElementById("divProductos")
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador;

fetch('productos.json')
.then(response => response.json())
.then(dataProductos => {
   dataProductos.forEach((productoEnArray, indice)=> {

       divProductos.innerHTML += `
        <div class="card border-danger mb-3" id="producto${indice}" style="max-width: 20rem; margin:8px">
            <div class="card-header">${productoEnArray.nombre}</div>
            <img src="./img/${productoEnArray.img}" class="card-img-top" alt="Mozzarella">
            <div class="card-body">
                <h4 class="card-title">${productoEnArray.peso}</h4>
                <p class="card-text">$${productoEnArray.precio}</p>
                <p class="card-text">Stock:${productoEnArray.stock}</p>
                <button id="boton${indice}" class="btn btn-dark"><i class="fas fa-cart-plus fa-1x"></i></button>
            </div>
        </div>
       `
   });

   dataProductos.forEach((productoEnArray, indice) => {
       document.getElementById(`boton${indice}`).addEventListener('click', () => {
            if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                productos[index].cant++
                localStorage.setItem('carrito', JSON.stringify(productos))
            } else {
                let nuevoProducto = new Producto(productoEnArray.nombre, productoEnArray.peso,
                     productoEnArray.precio, productoEnArray.stock, productoEnArray.img)
                productos.push(nuevoProducto)
                localStorage.setItem('carrito', JSON.stringify(productos))
            }

       })
   })
})