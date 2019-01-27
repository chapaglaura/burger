var express = require('express');

var router = express.Router();
var burger = require('../models/burger');

router.get('/', function(req, res) {
    console.log('getting all');
    burger.all(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', function(req, res) {
    console.log(req.body, 'hello');
    burger.insert(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    console.log(condition);
    burger.update({devoured: req.body.devoured}, condition, function(result) {
        res.json({id: result.insertId});
    });
});

module.exports = router;