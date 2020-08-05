const { Router } = require("express");

const router = require("express").Router();
const path = require("path");



router.get('/', function (req, res) {
    var x = path.join(__dirname, "../public/index.html");
    res.sendFile(x) 
});

router.get('/exercise', function (req, res) {
    var x = path.join(__dirname, "../public/exercise.html");
    res.sendFile(x) 
});

router.get('/stats', function (req, res) {
    var x = path.join(__dirname, "../public/stats.html");
    res.sendFile(x) 
  });

  module.exports = router;