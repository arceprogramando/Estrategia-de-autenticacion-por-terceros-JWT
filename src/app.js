// Server

import express from 'express';
import cors from 'cors';
// import fileStore from 'session-file-store';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mongoStore from 'connect-mongo';
import displayRoutes from 'express-routemap';
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';
import passport from 'passport';
import configObject from './config/config.js';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import productRouter from './routes/products.routes.js';
import mongoDBConnection from './dao/db/config/mongo.config.js';
import cartRouter from './routes/carts.routes.js';
import messageRouter from './routes/message.routes.js';
import sessionRoutes from './routes/session.routes.js';
import initializePassport from './config/passport.config.js';
// Cookies
// import cookiesRouter from './routes/cookies.routes.js';

const app = express();
const env = configObject;
// Middleware
app.use(cors());
app.use(cookieParser());

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.set('PORT', env.PORT || 8080);
app.set('NODE_ENV', env.NODE_ENV || 'development');

app.use(
  session({
    store: mongoStore.create({
      mongoUrl: env.DB_CNN,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      ttl: 30,
    }),
    secret: 'mi_clave_secreta',
    saveUninitialized: false,
    resave: false,
  }),
);

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

const server = app.listen(app.get('PORT'), () => {
// eslint-disable-next-line no-console
  console.log(`=Encendido servidor en puerto ${app.get('PORT')}= \n====== http://localhost:${app.get('PORT')}/ =====`);
  // eslint-disable-next-line no-console
  console.log(`==========ENV:${app.get('NODE_ENV')}==========`);
  // eslint-disable-next-line no-console
  console.log('===============^^^^^===============');
  displayRoutes(app);
});

mongoDBConnection();

app.use('/', viewsRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/chat', messageRouter);
// app.use('/api/cookies', cookiesRouter);
app.use('/api/session', sessionRoutes);

const io = new Server(server);

io.on('connection', (socket) => {
  // eslint-disable-next-line no-console
  console.log('Saludo desde el servidor');
  socket.on('message', (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });
});
