
var connection = require('./connection');

var orm = {
    selectAll(table, cb) {
        var queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, function (err, result) {
            cb(result);
        });
    },
    insertOne(table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table}(${cols.toString()}) VALUES(${printQuestionMarks(vals.length)})`;
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne(table, objColsVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColsVals) + " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        })
    }
}

function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        var value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

module.exports = orm;