exports.getMe = async (req, res) => {
  res.json({
    message: 'User context from auth middleware',
    user: {
      id: req.user.id,
      role: req.user.role,
      iat: req.user.iat,
      exp: req.user.exp,
    },
  });
};
