const express = require('express');
const path = require('path');
const Dirpath=require('../utils/path')
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(Dirpath,'views','shop.html'));
});

module.exports = router;