class carritoCompra {
  constructor() {
    this.products = [];
  }

  agregarProducto(name, price, quantity) {
    const product = { name, price, quantity };
    this.products.push(product);
  }

  calcularTotal(getProductsFunction) {
    const items = getProductsFunction();
    if (items.length === 0) {
      throw Error("Factura inválida");
    }
    let total = 0;

    for (const item of items) {
      total += item.price * item.quantity;
    }
    return total;
  }

  aplicarDescuento(porcentaje, total) {
    const discount = total * (porcentaje / 100);
    return total - discount;
  }
}

module.exports = { carritoCompra };
