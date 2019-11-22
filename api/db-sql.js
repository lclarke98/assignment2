let mysql = require('mysql2');
let connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : "root",
              database : 'assignment2'
            });

connection.connect(); 
global.db = connection;

//add new register (post)
module.exports.post = function(req, res){
       let name = "tt";
       let test = req.params.name;
       echo(test);
       let number = 2;
       let sql = "INSERT INTO `numberRegister`(`numberReg_name`,`numberReg_number`) VALUES ('" + name + "','" + number + "')";
       let query = db.query(sql, function(err, result) {
           console.log("added");
       });
 };

 //get a register (get)
module.exports.getRegister = function(req, res){
  let name = req.body.name;
  let number = req.body.number;
  let sql = "select * FROM `numberRegister` WHERE (`name`,`number`) VALUES ('" + name + "','" + number + "')";
  let query = db.query(sql, function(err, result) {
      console.log(added);
  });
};

 //put number in a register (put)
 module.exports.putNumber = function(req, res){
  let name = req.body.name;
  let number = req.body.number;
  let sql = "select * FROM `numberRegister` WHERE (`name`,`number`) VALUES ('" + name + "','" + number + "')";
  let query = db.query(sql, function(err, result) {
      console.log(added);
  });
};