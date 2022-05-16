var express = require('express');
var router = express.Router();

/* GET users listing. */
let dbConnection = require('./../db/db').localConnect();
router.get('/', function (req, res, next) {

  dbConnection.query('select * from signup', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  })
});
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

router.post('/flightclick', function (req, res, next) {

  let {

    firstname,
    lastname,
    email,
    phonenumber,
    fromc,
    toc,
    passengers,
    amount,
    date
  } = req.body // destructing of object property 


  let insert_query = `INSERT INTO flight_booking
            (firstname,lastname, email,phonenumber,fromc, toc, passengers,amount,date)
             VALUES ('${firstname}','${lastname}','${email}','${phonenumber}',
             '${fromc}','${toc}','${passengers}', ${amount},'${date}')`;

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

//busclick list
router.post('/busclick', function (req, res, next) {
  let {

    firstname,
    lastname,
    email,
    phonenumber,
    fromc,
    toc,
    passengers,
    amount,
    date
  } = req.body // destructing of object property 


  let insert_query = `INSERT INTO bus_booking
            (firstname,lastname, email,phonenumber,fromc, toc, passengers,amount,date)
             VALUES ('${firstname}','${lastname}','${email}','${phonenumber}',
             '${fromc}','${toc}','${passengers}', ${amount},'${date}')`;

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

//trainclick list

router.post('/trainclick', function (req, res, next) {
  let {
    firstname,
    lastname,
    email,
    phonenumber,
    fromc,
    toc,
    passengers,
    amount,
    date
  } = req.body // destructing of object property 


  let insert_query = `INSERT INTO train_booking
            (firstname,lastname, email,phonenumber,fromc, toc, passengers,amount,date)
             VALUES ('${firstname}','${lastname}','${email}','${phonenumber}',
             '${fromc}','${toc}','${passengers}', ${amount},'${date}')`;

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


//hotellist
router.post('/hotelclick', function (req, res, next) {
  let {
    firstname,
    lastname,
    email,
    phonenumber,
    city,
    hotelname,
    checkin,
    checkout,
    rooms,
    amount
  } = req.body // destructing of object property 
  let insert_query = `INSERT INTO hotel_booking
            (firstname,lastname, email,phonenumber,city,hotelname,checkin,checkout,rooms,amount)
             VALUES ('${firstname}','${lastname}','${email}','${phonenumber}','${city}','${hotelname}',
             '${checkin}','${checkout}','${rooms}', ${amount})`;
  dbConnection.query(insert_query, (error, result, fields) => {
    if (error) {
      res.send(error);
      throw error;
    } else {
      +
        console.log(result);
      res.send('user profile added successfully');
    }
  });

});

//flightlist getting
router.get('/flightclick', function (req, res, next) {
  let email = req.query.email;
  console.log(email)
  let selectQuery = `select * from flight_booking WHERE email ='${email}'`;
  dbConnection.query(selectQuery, (error, results, fields) => {
    if (error) throw error;
    res.send(results)

  })
});

//trainlist

router.get('/trainclick', function (req, res, next) {
  let email = req.query.email;
  console.log(email)
  let selectQuery = `select * from train_booking WHERE email ='${email}'`;
  dbConnection.query(selectQuery, (error, results, fields) => {
    if (error) throw error;
    res.send(results)

  })
});

router.get('/hotelclick', function (req, res, next) {
  let email = req.query.email;
  console.log(email)
  let selectQuery = `select * from hotel_booking WHERE email ='${email}'`;
  dbConnection.query(selectQuery, (error, results, fields) => {
    if (error) throw error;
    res.send(results)

  })
});

//buslist
 
router.get('/busclick', function (req, res, next) {
  let email = req.query.email;
  console.log(email)
  let selectQuery = `select * from bus_booking WHERE email ='${email}'`;
  dbConnection.query(selectQuery, (error, results, fields) => {
    if (error) throw error;
    res.send(results)

  })
});

//get user details
router.delete('/signup/:firstname', (req, res, next) => {
  let firstname = req.params.firstname;
  let deleteq = `DELETE FROM signup WHERE firstname = '${firstname}'`;

  dbConnection.query(deleteq, (error, result, fields) => {
    if (error) {
      res.send(error);
      throw error;
    } else {
      console.log(result);
      if (result.affectedRows) {
        res.send(`${firstname} has been deleted`)
      } else {
        res.send(`Unable to delete user, Not Found`);
      }
    }
  });

});
module.exports = router;
