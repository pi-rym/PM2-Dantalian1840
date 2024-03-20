const app = require("./src/server");
const dbCon = require("./src/config/dbCon");
require("dotenv").config();

dbCon().then((res) => {
  app.listen(process.env.PORT, () => {
    console.log("Server listening"); //Método que indica escuchar solicitudes
  });
});
