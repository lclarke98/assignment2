let mysql = require('mysql2');
let connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : "root",
              database : 'assignment2'
            });

connection.connect(); 
global.db = connection;

module.exports.get = async (id) => {
  connection.query("SELECT reg_number FROM register WHERE reg_name = ? ",
  [id],
    (error, results) => {
      console.log(error)
    });
};

//???
 module.exports.post = async (id) => {
  let val =0;
  let sql = "INSERT INTO `register`(`reg_name`,`reg_number`) VALUES ('" + id + "','" + val + "')";
  let query = db.query(sql, function(err, result) {
      console.log("added");
  });
};

//done
module.exports.delete = async (id) => {
  let sql = "DELETE FROM register WHERE reg_name = ? ";
  connection.query(sql,id, (error, results) => {
    if (error){
      console.log(err)
    }
  });
};

//done
module.exports.put = async (id, newval) => {
  connection.query("UPDATE register SET reg_number = ? WHERE reg_name = ? ",
  [newval, id],
    (error, results) => {
      console.log(error)
    });
};