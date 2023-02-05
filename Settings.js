const sql = require('./db');

module.exports = {
    GetAllSettings: (req, res, next) => {
        var str = `select sum, time, about, popup from settings`
        sql.query(str, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        })
    },
    GetSumTotal: (req, res, next) => {
        var str = `select sum(Amount) as total from transactions where temp = false`
        sql.query(str, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        })
    },
    UpdateSettings: (req, res, next) => {
        const {sum, time, about, popup} = req.body;
        var str = `update settings set sum=${sum}, time='${time}', about='${about}', popup=${popup} where id=1`
        console.log(str);
        sql.query(str, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
        })
    } 
}