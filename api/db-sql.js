//Database variables
let mysql = require('mysql2/promise');
const config = require('./db');
const connection = mysql.createConnection(config.mysql)

//Get
module.exports.get = async (id) => {
  let con = await connection;
  let [data] = await con.query("SELECT reg_number FROM register WHERE reg_name = ? ",[id]);
  if(data.length == 0){
    return "0";
  }else{
    return data[0].reg_number
  }
};

//Post
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

//Delete
module.exports.delete = async (id) => {
  let con = await connection;
  await con.query("DELETE FROM register WHERE reg_name = ? ",[id]);
  return 204
};

//Put
module.exports.put = async (id, newVal) => {
  let con = await connection;
  await con.query("UPDATE register SET reg_number = ? WHERE reg_name = ? ",[newVal, id])
  return newVal
};