const { carritoCompra } = require("../index");

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

describe("Testing General", () => {
  let carrito;

  beforeEach(() => {
    carrito = new carritoCompra();
  });

  describe("Comprobar métodos", () => {
    it("Comprobar método agregarProducto", () => {
      expect(typeof carrito.agregarProducto).toBe("function");
    });
    it("Comprobar método calcularTotal", () => {
      expect(typeof carrito.calcularTotal).toBe("function");
    });
    it("Comprobar método aplicarDescuento", () => {
      expect(typeof carrito.aplicarDescuento).toBe("function");
    });
  });

  describe("Función para calcular el total del carrito", () => {
    it("El método agregarProducto debería poder agregar producto a la lista", () => {
      carrito.agregarProducto(mockGetProduct);
      expect(carrito.products).toContain(mockGetProduct); // completar
    });
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
      const porcentajeDescuento = 20;
      const descuentoAplicado = total - total * (porcentajeDescuento / 100);
      expect(carrito.aplicarDescuento(porcentajeDescuento, total)).toBe(
        descuentoAplicado
      );
    });
  });
});
