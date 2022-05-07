var express = require('express');
var router = express.Router();

/* GET users listing. */
let dbConnection = require('./../db/db').localConnect();
router.get('/', function (req, res, next) {
  // res.send('respond with a resource')
  dbConnection.query('select * from signup', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  })
});
// router.post('/signup', function (req, res, next) {
//   console.log(req.body);

//   res.send('Registered Successfully');
// })

//signup database connection

router.post('/signup', function (req, res, next) {

  let {
    firstname,
    lastname,
    email,
    phonenumber,
    password,
    city
    // create_datetime,
  } = req.body // destructing of object property 


  let insert_query = `INSERT INTO signup
            (firstname,lastname, email,phonenumber, password,city)
             VALUES ('${firstname}','${lastname}','${email}','${phonenumber}', '${password}', '${city}')`;

  dbConnection.query(insert_query, (error, result, fields) => {

    if (error) {
      res.send(error);
      throw error;
    } else {
      console.log(result);
      res.send('user profile added successfully');
    }

  });

});

//login and signup page connection

router.post('/login', (req, res, next) => {
  let {
    email,
    password
  } = req.body; // destructing of object property 

  let userFound = `select * from signup  WHERE email = '${email}' and password= '${password}'`;

  dbConnection.query(userFound, (error, result, fields) => {

    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        // res.send(`{message: 'user found', usercount: 1}`);
        res.json(result)
      } else {
        // res.send(`{message: 'user no found', usercount: 0}`);
        res.json({ message: 'user not found', usercount: 0 })
      }
    }

  });


});


router.delete('/delete-user/:firstname', (req, res, next) => {
  let firstname = req.params.firstname;
  let deleletq = `DELETE FROM signup WHERE firstname = '${firstname}'`;

  dbConnection.query(deleletq, (error, result, fields) => {
    if (error) {
      res.send(error);
      throw error;
    } else {
      console.log(result);
      if (result.affectedRows) {
        res.send(`${firstname} has been delete`)
      } else {
        res.send(`Unable to delete user, Not Found`);
      }
    }
  });

});
module.exports = router;
