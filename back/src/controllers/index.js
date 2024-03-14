// Módulo con las funciones que establece la LÓGICA DE NEGOCIO en cada una de las rutas.
// Instruye lo que hay que hacer, pero no lo hace.

// Para la ruta GET /users =>
// 1. Vamos a la base de datos a pedir la información.
// 2. Responder al cliente con la información obtenida.

const controller = (req, res) => {
  res.status(200).send("Se recibe una solicitud");
};

module.exports = { controller };
