var express = require('express');
var router = express.Router();

/* GET users listing. */
let dbConnection = require('./../db/db').localConnect();
  router.get('/profile',function(req, res, next){
  // res.send('respond with a resource')
  dbConnection.query('select * from signup', (error, results, fields) => {
    if (error) throw error;
     res.send(results)
  })
});
router.post('/signup', function (req, res, next) {
  console.log(req.body);

  res.send('Registered Successfully');
})


module.exports = router;
