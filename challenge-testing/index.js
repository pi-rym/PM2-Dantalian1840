class carritoCompra {
  constructor() {
    this.products = [];
    this.id = 0;
  }

  agregarProducto(name, price, quantity) {
    this.id++;
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
    const dotPercentage = porcentaje / 100;
    const discount = total * dotPercentage;
    const totalDescuento = total - discount;

    return totalDescuento;
  }
}

module.exports = { carritoCompra };
