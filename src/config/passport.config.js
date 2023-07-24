import passport from 'passport';
import local from 'passport-local';
import userModel from '../dao/models/user.model.js';
import encrypt from '../utils/encrypts.js';

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use('register', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
  }, async (req, username, password, done) => {
    const {
      firstname,
      lastname,
      email,
      age,
    } = req.body;
    try {
      const findUser = await userModel.findOne({ email: username });
      if (findUser) {
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

      return done(null, newUser);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('🚀 ~ file: passport.config.js:36 ~ initializePassport ~ error:', error);
      return done(`Error al obtener el usuario: ${error}`);
    }
  }));

  passport.serializeUser((user, done) => done(null, user._id));

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};

export default initializePassport;
