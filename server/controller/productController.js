var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});

var model=require('../models');


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

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * get all product
 */
exports.getProducts = (req, res) => {
    model.product.findAll().then(result=> {
            res.json({
                product: result,
                success: true,
            });
    })
    .catch(function(e) {
        //gestion erreur
        console.log(e);
    });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * get product by id
 */
exports.productById = (req, res) => {
    var input= JSON.parse(JSON.stringify(req.body));
    var data = {
        where: { id: input.id, },
    };
    model.product.findOne(data).then(result=> {
            res.json({
                product: result,
                success: true,
            });
    })
    .catch(function(e) {
        //gestion erreur
        console.log(e);
    });
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * update product by id
 */
exports.updateProductById = (req, res) => {
    var input= JSON.parse(JSON.stringify(req.body));
    var data = {
        where: { id: input.id, },
        
    };
    var dat={
        name:input.name
    }
    
    model.product.findOne(data).then(result=> {

        if(result){
        return result.update(dat).then(obj=>{
            res.json({
                product: obj,
                success: true,
            });
    })}
    else{ res.json({
        
        success: false,
    });}})
  
        

           
};




