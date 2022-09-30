const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const validarJwt = (req = request, res = response, next) => {

  //header en el que llega el toke, se elige con que nombre llegara
  const token = req.header("X-TOKEN");

  if(!token){
     return res.status(401).json({
      msg: "no hay token en la peticion"
     });
  }

  try {
    //se extraen los datos que se requieran del token y se verifica que sea un token correcto
    const { informacion } = jwt.verify(token, process.env.SECRETO_JWT);

    //se agregan los datos extaraidos a la peticion, podrias ser el id del usuario dueño del token y cone so se extrae lo demas
    req.informacion = informacion;
    next();
  } catch (error){
    console.log(error);
    res.status(401).json({
     msg: "token no valido"
    });
  }

}

module.exports = validarJwt;