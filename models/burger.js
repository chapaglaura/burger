var orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insert: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColsVals, condition, cb) {
        orm.updateOne('burgers', objColsVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;