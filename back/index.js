const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then((res) => {
  app.listen(3000, () => {
    console.log("Servidor escucha en el puerto 3000"); //Método que indica escuchar solicitudes
  });
});
// http://localhost:3000
