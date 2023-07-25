import { genSalt, hashSync, compareSync } from 'bcrypt';

const createHashValue = async (val) => {
  const salt = await genSalt();
  return hashSync(val, salt);
};

const isValidPasswd = async (psw, encryptedPsw) => compareSync(psw, encryptedPsw);

export { createHashValue, isValidPasswd };
