const sha1 = require("sha1");
const locutus = require("locutus/php/strings/sha1");
// console.log(locutus("123456"), sha1("123456"));
const encryptPassword = (req, res, next) => {
  console.log(req.body);
  req.body.password = locutus(req.body.password);
  next();
};
module.exports = { encryptPassword };
