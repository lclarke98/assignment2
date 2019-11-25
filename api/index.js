const express = require('express');
const bodyParser = require('body-parser');
const api = express.Router();
module.exports = api;

let mysql = require('mysql2');
const config = require('./db');
const connection = mysql.createConnection(config.mysql)
const db = connection;
// Connects to mysql database
try {
  connection.connect();
} catch (e) {
  console.log(e);
}


api.get('/:name(\\w+)', async (req, res) => {
  let id = req.params.name;
  let val = req.body;
  try {
    connection.query("SELECT reg_number FROM register WHERE reg_name = ? ",
    [id],
    (error, results) => {
      if (error)
        return res.json({
        error: error
    });
    if(results.length == 0){
      res.json(0)
    }
    else{
      res.json(parseInt(results[0].reg_number));
    }
  });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.post('/:name(\\w+)', bodyParser.text(), async (req, res) => {
  let id = req.params.name;
  let val = req.body;
  try {
    connection.query("SELECT reg_number FROM register WHERE reg_name = ? ",
    [id],
    (error, results) => {
      if (error)
        return res.json({
        error: error
    });
    if(results.length == 0){
      let sql = "INSERT INTO `register`(`reg_name`,`reg_number`) VALUES ('" + id + "','" + val + "')";
      let query = db.query(sql, function(err, result) {
      })
      res.json(parseInt(val));
    }
    else{
      let currentVal = results[0].reg_number;
      let newVal = parseInt(val)+parseInt(currentVal);
      console.log(newVal)
      connection.query("UPDATE register SET reg_number = ? WHERE reg_name = ? ",
      [newVal, id],
      (error, results) => {
        console.log(error)
      })
      res.json(newVal);
    };
  });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});


api.delete('/:name(\\w+)', bodyParser.text(), async (req, res) => {
  id = req.params.name;
  try {
    let sql = "DELETE FROM register WHERE reg_name = ? ";
    connection.query(sql,id, (error, results) => {
      if (error){
        console.log(err)
      }
    });
    res.sendStatus(204)
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.put('/:name(\\w+)', bodyParser.text(), async (req, res) => {
  let id = req.params.name;
  let newval = req.body;
  try {
    connection.query("UPDATE register SET reg_number = ? WHERE reg_name = ? ",
    [newval, id],
    (error, results) => {
      console.log(error)
    });
    res.json(parseInt(newval))
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

