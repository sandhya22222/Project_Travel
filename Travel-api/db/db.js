var mysql = require('mysql2');
let learn = function () {
   let connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sandhya_Allu123',
    database: 'travel_api',
     insecureAuth : true

    });
    return connection;
};

module.exports.localConnect = learn;