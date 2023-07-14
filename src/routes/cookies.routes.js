import { Router } from 'express';

const router = Router();

router.post('/create', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Body**** ', req.body);

  res.cookie(
    'cookieUser',
    { user: `${req.body.email}` },
    { maxAge: 20000 },
  ).send();
});

export default router;
