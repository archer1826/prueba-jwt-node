const { validationResult } = require("express-validator");//necesario para obtener errores de los check puestos en el controlador

//metodo que valida si hay algun error en los requets de los controladores
const validarCampos = (req, res, next) => {
 const errors = validationResult(req); //captura los errores del request
 if(!errors.isEmpty()){
   return res.status(400).json(errors);
 }
 next();//si no hay errores continua con el consumo del controlador
}

module.exports = {
 validarCampos
}