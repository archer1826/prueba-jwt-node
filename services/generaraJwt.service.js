const jwt = require("jsonwebtoken");

const generarJWt = (informacion) => {

  return new Promise((resolve, reject) => {
   const payload = {informacion};
   /*token recibe tres parametros
   1.- payload = informacion del token
   2.- secreto del token
   3.- opcioenes del token, en estacso solo se pone el de expiracions
   4.- callback que captura la respuesta tanto positiva como negativa 
   */
   jwt.sign(payload, process.env.SECRETO_JWT, {
    expiresIn: '4h'
   }, (error, token) => {
    if(error){
      console.log("error " + error);
      reject("ha ocurrido un error con la generacion del token");
    } else {
     resolve(token);
    }
   });
  });

}

module.exports = generarJWt;
