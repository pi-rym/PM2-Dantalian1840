const { carritoCompra } = require("../index");

const carrito = new carritoCompra();

const mockGetProduct = jest.fn(() => {
  return [{ name: "ProductoA", price: 10, quantity: 2 }];
});

const mockGetProducts = jest.fn(() => {
  return [
    { name: "ProductoA", price: 10, quantity: 2 },
    { name: "ProductoB", price: 40, quantity: 5 },
    { name: "ProductoC", price: 15, quantity: 4 },
  ];
});

const mockEmptyProduct = jest.fn(() => []);

describe("Función para calcular el total del carrito", () => {
  it("El callback debería ejecutarse al menos una vez", () => {
    mockGetProduct();
    expect(mockGetProduct).toHaveBeenCalled();
  });

  it("Calcular el total con un único ítem", () => {
    expect(carrito.calcularTotal(mockGetProduct)).toBe(20);
  });

  it("Calcular el total con varios ítems", () => {
    expect(carrito.calcularTotal(mockGetProducts)).toBe(280);
  });

  it("Ejecutar error si no hay ítems", () => {
    expect(() => carrito.calcularTotal(mockEmptyProduct)).toThrow(
      "Factura inválida"
    );
  });
});

describe("Función para calcular el descuento aplicado del carrito", () => {
  it("Calcular el descuento final del carrito", () => {
    const total = carrito.calcularTotal(mockGetProducts);
    expect(carrito.aplicarDescuento(20, total)).toBe(224);
  });

  it("", () => {});
});

//Crear el archivo total.js con las funciones para exportar y testear
