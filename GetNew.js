const sql = require('./db');

module.exports = {
    GetNewTrans: (req, res, next)=>{
        const {lastid} = req.body;
        var str = `select * from transactions where new = true and temp = false and id > ${lastid} order by id`
        console.log(str);
        sql.query(str, function(err,result, fields){
            if (err) throw err;
            res.status(200).json(result);
        })
    }
}