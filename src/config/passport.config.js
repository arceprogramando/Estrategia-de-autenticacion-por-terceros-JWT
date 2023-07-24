import passport from 'passport';
import local from 'passport-local';
import userService from '../dao/models/user.model.js';
import encrypt from '../utils/encrypts.js';

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  // Nota que passport utiliza sus propios "middlewares" de a cuerdo a cada estrategia
  // Iniciamos la estrategia local
  /*
   * username sera en este caso el correo.
   * done sera el callback de resolucion de passport,
   * el primer argumento es para error y el segundo para el usuario
  */
  passport.use('register', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
  }, async (req, username, password, done) => {
    // passReqToCallback permite que se pueda acceder al objeto req como cualquier otro middleware
    const {
      firstname,
      lastname,
      email,
      age,
    } = req.body;
    try {
      const findUser = await userService.findOne({ email: username });
      if (findUser) {
        /* No encontrar un usuario no significa que sea un error,
         * asi que el error lo pasamos como null
         * pero al usuario como false,esto significa "No ocurrio un errror al buscar el usuario"
         * Esto significa "No ocurrio un error al buscar el usuario , pero el usuario ya existe
         * y no puedo dejarte continuar"
        */
        // eslint-disable-next-line no-console
        console.log('El usuario ya existe');
        return done(null, false);
      }
      const newUser = {
        firstname,
        lastname,
        email,
        age,
        password: encrypt.createHash(password),
      };
      return newUser;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('🚀 ~ file: passport.config.js:49 ~ initializePassport ~ error:', error);
      return done(`Error al obtener el usuario:${error}`);
    }
  }));
};

export default initializePassport;
