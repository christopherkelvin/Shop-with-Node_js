
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Home Cryser</h1>");
});
app.listen(3000);
