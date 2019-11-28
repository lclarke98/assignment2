const express = require('express');
const bodyParser = require('body-parser');
const api = express.Router();
module.exports = api;

const db = require(`./db-sql`);

// api to get value for specific register
api.get('/:name(\\w+)', async (req, res) => {
  try {
    res.send(await db.get(req.params.name));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// api method to add a register and value to database
api.post('/:name(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    res.send(await db.post(req.params.name, req.body));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// api method to delete a register
api.delete('/:name(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    res.send(await db.delete(req.params.name));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// api method to update the value of a given register
api.put('/:name(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    res.send(await db.put(req.params.name, req.body));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});