const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const Dirpath=require('../utils/path')


router.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", (req, res, next) => {
 res.sendFile(path.join(Dirpath,'views','add-product.html'))
});


router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;