const testUrl = (req, res, next) => {
  if (req.url === "/admin") {
    console.log(req.url);
    res.send("Authorized");
    next();
  } else {
    res.send("You are not allowed to access this page");
  }
};

module.exports = { testUrl };
