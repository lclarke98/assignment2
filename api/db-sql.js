//Database variables
let mysql = require('mysql2/promise');
const config = require('./db');
const connection = mysql.createConnection(config.mysql)
const db = connection;

// Connects to mysql database
module.exports.get = async (id) => {
  let con = await connection;
  let [data] = await con.query("SELECT reg_number FROM register WHERE reg_name = ? ",[id]);
  if(data.length == 0){
    return "0";
  }else{
    return data[0].reg_number
  }
};

//???
module.exports.post = async (id,val) => {
  console.log(id);
  let con = await connection;
  let [data] = await con.query("SELECT reg_number FROM register WHERE reg_name = ? ",[id]);
  if(data.length == 0){
    console.log(typeof(val))
    await con.query("INSERT INTO `register`(`reg_name`,`reg_number`) VALUES ('" + id + "','" + val + "')");
    return val;
  }else{
    console.log("2")
    let currentVal = data[0].reg_number;
    let newVal = parseInt(currentVal) + parseInt(val);
    console.log(typeof(newVal))
    await con.query("UPDATE register SET reg_number = ? WHERE reg_name = ? ",[newVal, id],);
    return newVal.toString();
  }
};

//done
module.exports.delete = async (id) => {
  let con = await connection;
  await con.query("DELETE FROM register WHERE reg_name = ? ",[id]);
  return 204
};

//done
module.exports.put = async (id, newVal) => {
  let con = await connection;
  await con.query("UPDATE register SET reg_number = ? WHERE reg_name = ? ",[newVal, id])
  return newVal
};