import { hashSync, genSaltSync, compareSync } from 'bcrypt';

/*
* hashSync toma el pasword que pasemos y procedera a aplicar un proceso de hasheo a partir
* de un "Salt"P
* genSaltSync generara un salto de 10 caracteres. Un salt es una string random
* que hace que el proceso de hasheo se realice de manera impredecible.
* Devuelve una string con el password hasheado. El proceso es IRREVERSIBLE.
*/

const createHash = (password) => hashSync(password, genSaltSync(10));

/*
* compareSync tomara primero el password sin hashear y lo compara con el
* password ya hasheado en la base de datos. Devolvera true o false dependiendo
* si el password coincide o no.
*/
const isValidPassword = async (psw, encryptedPsw) => {
  const validValue = compareSync(psw, encryptedPsw);
  return validValue;
};

export default {
  createHash,
  isValidPassword,
};
