require("dotenv").config(); // obtiene la configuracion del archivo .env
const express = require("express");
const cors = require('cors');//necesario para evitar problemas de conexion con el front

class Server {

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  //middlewares, son elementos que se ejecutan antes de poner en marcha una funcionaldiad, en este caso el servidor
  middlewares(){
    //cors
    this.app.use(cors());
    //permite el manejo de json para todo el servidor
    this.app.use(express.json());
  }
  //por cada controller que se cree debe ser agregado aqui
  routes(){
    this.app.use("/", require("../controllers/login.controller"));
    this.app.use("/", require("../controllers/clientes.controller"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
     });//obtiene el puerto de las variables de entorno
  }

}

module.exports = Server;
