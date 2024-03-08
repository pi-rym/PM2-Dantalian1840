class carritoCompra {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  agregarProducto(product, price, quantity) {
    this.id++;
    const carritoCompra = new carritoCompra(product, price, quantity);
    this.activities.push(producto);
  }

  calcularTotal() {}

  aplicarDescuento(porcentaje) {}
}

module.exports = carritoCompra;

// -- Actividad 4 --
// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:
// constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
