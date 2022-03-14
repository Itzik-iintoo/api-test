const sha1 = require("sha1");

const encryptPassword = (req, res, next) => {
  console.log(req.body);
  req.body.password = sha1(req.body.password);
  next();
};
module.exports = { encryptPassword };
