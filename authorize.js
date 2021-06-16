const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "ziya") {
    req.user = { name: "ziya", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized user");
  }
};

module.exports = authorize;
