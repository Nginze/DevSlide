const getUser = async (req, res) => {
  if (req.user) {
    res.status(200).json({
      isAuth: req.isAuthenticated(),
      msg: "User is authenticated",
      user: req.user,
    });
  } else {
    res.status(500).json({ isAuth: false, msg: "User is not authenticated" });
  }
};

module.exports = { getUser };
