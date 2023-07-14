const authMdw = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: auth.middleware.js:3 ~ authMdw ~ req:', req);
  if (req.sessiom?.user === 'felipe' || req.session.admin) {
    return next();
  }

  return res.status(401).json({
    message: 'Unauthorized access',
  });
};

export default authMdw;
