var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register',(req,res)=>{
  res.render('register')
})
router.get('/signin',(req,res)=>{
  res.render('signin');
})

module.exports = router;
