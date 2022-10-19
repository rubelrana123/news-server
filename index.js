const express = require('express');
const res = require('express/lib/response');
const app = express();
const cors = require('cors');
const port = process.env.PORT ||5000;
app.use(cors());
const categories = require('./data/Category.json')
app.get ('/', (req , res) => {
  res.send('Daily News is running')
})
app.get('/category', (req, res) => {
  res.send(categories);
})
app.listen(port , () => {
  console.log("Daily server is Running");
})  