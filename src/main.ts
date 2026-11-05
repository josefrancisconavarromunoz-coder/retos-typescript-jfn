
const stock = [
  { id: 1, nombre: "Ratón óptico", precio: 25, categoria: "perifericos" },
  { id: 2, nombre: "Memoria RAM 16GB", precio: 85, categoria: "componentes" },
  { id: 3, nombre: "Monitor 4K", precio: 320, categoria: "perifericos" },
  { id: 4, nombre: "Disco SSD 1TB", precio: 65, categoria: "componentes" },
];

// Seleccionamos el div del HTML
const resultadoFiltro = document.querySelector("#resultado-filtro");

// Comprobamos que existe el elemento
if (resultadoFiltro) {

  // Filtramos los productos de componentes con precio superior a 50 €
  const productosFiltrados = stock.filter(producto =>
    producto.categoria === "componentes" && producto.precio > 50
  );

  // Recorremos los productos filtrados
  productosFiltrados.forEach(producto => {

    // Creamos un párrafo
    const elemento = document.createElement("p");

    // Introducimos el nombre y el precio
    elemento.textContent = `${producto.nombre} - ${producto.precio} €`;

    // Añadimos el párrafo al div del HTML
    resultadoFiltro.appendChild(elemento);

  });

} else {
  console.error("No se ha encontrado el elemento #resultado-filtro");
}


// EJERCICIO 2: CARRITO

const carritoOriginal = [
  { id: 101, articulo: "Teclado", precio: 45, cantidad: 1 },
  { id: 102, articulo: "Cable HDMI", precio: 12, cantidad: 1 },
];

// Tu código aquí abajo

// Creamos un carrito nuevo con map y spread
const carritoActualizado = carritoOriginal.map(producto => {
  if (producto.id === 102) {
    return {
      ...producto,
      cantidad: 3
    };
  }

  return producto;
});

// Mostramos el resultado en el HTML
const resultadoCarrito = document.querySelector("#resultado-carrito");

if (resultadoCarrito) {
  resultadoCarrito.textContent = JSON.stringify(carritoActualizado, null, 2);
}

