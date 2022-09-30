const { Router } = require("express"); //necesario para poder imporatr las rutas del controlador al servidor
const { check } = require("express-validator");//necesario para aplicar validaciones
const router = Router();

const validarJwt = require("../middlewares/validaJwt");

const endPoint = "/api/cliente";

//req = request, de aqui se puede obtener datos de la peticion, como params, headres o el body
//res = de aqi se emite la respuesta con .json y su .status(codigoHttp)

//metodo que consulta todos los clientes
router.get(`${endPoint}/consultar/todos`, [
  validarJwt
], async (req, res) => {
  console.log(req);
  res.status(200).json({
   msg: "consulta",
  });
});

module.exports = router;