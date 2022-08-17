const harperive = require("harperive");
require("dotenv").config();
const { Client } = harperive;

const config = {
  harperHost: process.env.HARPER_HOST,
  username: process.env.HARPER_USER,
  password: process.env.HARPER_PASSWORD,
  schema: process.env.HARPER_SCHEMA
  
};
const db = new Client(config);

module.exports = { db };
