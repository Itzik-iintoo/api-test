const mysql = require("mysql2");
const config = require("../db/config");
const portalConfig = require("../db/portal.config");
const opn_usersConfig = require("../db/opn_users.config");
const portal = mysql.createConnection(portalConfig);
const opn_users = mysql.createConnection(opn_usersConfig);
const connection = mysql.createConnection(config);

const connectTest = (req, res, next) =>
  connection.query(
    `SELECT * FROM fake_db.authors  JOIN record_company.bands ON fake_db.authors.id = record_company.bands.id `,
    function (err, results) {
      err && console.log(err);
      console.log(results);
    }
  );

const loginUser = (req, res) =>
  opn_users.query(
    `SELECT first,last FROM user WHERE email = '${req.body.email}' AND password = '${req.body.password}'`,
    function async(err, results) {
      console.log(req.body.email, req.body.password);
      if (err) res.send({ error: err });
      if (results.length <= 0) res.send({ error: "Something went wrong" });
      res.send(results);
    }
  );
module.exports = { loginUser, connectTest };
