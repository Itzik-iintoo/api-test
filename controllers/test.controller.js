const mysql = require('mysql2');
const portalConfig = require('../db/portal.config')
const opn_usersConfig = require('../db/opn_users.config')
const portal = mysql.createConnection(portalConfig);
const opn_users = mysql.createConnection(opn_usersConfig);
const getAllUsers = (req,res) => portal.query(
    'SELECT * FROM `user` LIMIT 10',
    function(err, results, fields) {
        console.log('in controller');
        err ?
      console.log(err) :
      console.log(results); // results contains rows returned by server
    //   console.log(fields); // fields contains extra meta data about results, if available
    res.send(results)
    }
  );
const getAllOpnUsers = (req, res) => opn_users.query(
  'SELECT * FROM `user` LIMIT 10',
    function(err, results, fields) {
        console.log('in controller');
        err ?
      console.log(err) :
      console.log(results); // results contains rows returned by server
    //   console.log(fields); // fields contains extra meta data about results, if available
    res.send(results)
    }
)

const loginUser = (req, res) => portal.query(
  `SELECT name FROM 'user' WHERE email = ${req.body.email}`,
  function async (err, results) {
    if(err) res.send({error: err});
    res.send(results)
  }
  

)
module.exports = {getAllUsers,getAllOpnUsers , loginUser};