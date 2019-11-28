//Database variables
let mysql = require('mysql2/promise');
const config = require('./db');
const connection = mysql.createConnection(config.mysql)

// Method to get a named register from the database, returns 0 if not in the database
module.exports.get = async (id) => {
  let con = await connection;
  let [data] = await con.query("SELECT reg_number FROM register WHERE reg_name = ? ",[id]);
  if(data.length == 0){
    return "0";
  }else{
    return data[0].reg_number
  }
};

// Method to first check if the register is in the database then add it if its not
// If it is in the database adds the new value with the current value
module.exports.post = async (id,val) => {
  let con = await connection;
  let [data] = await con.query("SELECT reg_number FROM register WHERE reg_name = ? ",[id]);
  if(data.length == 0){
    await con.query("INSERT INTO register (reg_name, reg_number) VALUES (?,?)", [id, val]);
    return val;
  }else{
    let currentVal = data[0].reg_number;
    let newVal = parseInt(currentVal) + parseInt(val);
    await con.query("UPDATE register SET reg_number = ? WHERE reg_name = ? ",[newVal, id]);
    return newVal.toString();
  }
};

// Method to delete a named register
module.exports.delete = async (id) => {
  let con = await connection;
  await con.query("DELETE FROM register WHERE reg_name = ? ",[id]);
  return 204
};

// Method to update a named registers value
module.exports.put = async (id, newVal) => {
  let con = await connection;
  await con.query("UPDATE register SET reg_number = ? WHERE reg_name = ? ",[newVal, id])
  return newVal
};