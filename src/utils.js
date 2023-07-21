/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

/*
* hashSync toma el pasword que pasemos y procedera a aplicar un proceso de hasheo a partir
* de un "Salt"P
* genSaltSync generara un salto de 10 caracteres. Un salt es una string random
* que hace que el proceso de hasheo se realice de manera impredecible.
* Devuelve una string con el password hasheado. El proceso es IRREVERSIBLE.
*/
export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

/*
* compareSync tomara primero el password sin hashear y lo compara con el
* password ya hasheado en la base de datos. Devolvera true o false dependiendo
* si el password coincide o no.
*/

export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
