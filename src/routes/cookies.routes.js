// import { Router } from 'express';

// const router = Router();

// router.get('/', (req, res) => {
//   // eslint-disable-next-line no-console
//   console.log('Entro al GET COOKIES', req.signedCookies);
//   // res.cookie(nombre_de_la_cookie,valor_de_la_cookie,{maxAge:tiempo_de_vida_en_milisegundos})
// eslint-disable-next-line max-len
//   res.cookie('CoderCookie', 'Esta es una cookie muy poderosa', { maxAge: 10000, signed: true }).send('cookie');
// });

// router.post('/create', (req, res) => {
//   // eslint-disable-next-line no-console
//   console.log('Body**** ', req.body);

//   res.cookie(
//     'cookieUser',
//     { user: `${req.body.email}` },
//     { maxAge: 20000 },
//   ).send();
// });

// router.get('/getcookies', (req, res) => {
//   // Obtenemos la req.cookies y la enviamos al cliente para ver que tenemos almacenado
//   // Como usamos un secret para la cookie esta por ahora nos da undefined

//   res.send(req.signedCookies.email);
// });

// router.get('/delete', (req, res) => {
//   // eslint-disable-next-line no-console
//   console.log('Entro al delete cookies', req.cookies);
//   res.clearCookie('cookieUser');
//   res.send({ message: 'cookies reset OK' });
// });

// export default router;
