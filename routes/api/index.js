var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).json({
    data:[{'title':'api/'}],
    status:{
      code: 0,
      msg : 'success'
    }
  })
});

module.exports = router;
