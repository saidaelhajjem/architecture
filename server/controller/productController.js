var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});



exports.getAllProduct = (req, res) => {
    pool.query("SELECT * FROM products", function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.json({
                product: rows,
                success: true,
            });
        }

    });
};

