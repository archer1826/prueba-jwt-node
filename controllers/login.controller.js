const router = require("./clientes.controller");
const { check } = require("express-validator");

const generarJWt = require("../services/generaraJwt.service");
const { validarCampos } = require("../middlewares/validaCamposGeneral");

const endPoint = "/api/login";

router.post(`${endPoint}`, [
 check("correo", "el correo es obligatorio").isEmail(),
 check("password", "la clave es obligatoria").not().isEmpty(),
 validarCampos
], async (req, res) => {
 const {correo, password} = req.body;
 const token = await generarJWt(correo);
 res.status(200).json({
   token,
   correo
 });
});

module.exports = router
