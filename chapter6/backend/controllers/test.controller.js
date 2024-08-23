

const getInfo = (req, res) => {
  res.send("Hello from Controller");
};

const renderHTML = (req, res) => {
  res.send("<h1>hello World</h1>");
  res.end();
};

module.exports = { getInfo, renderHTML };
