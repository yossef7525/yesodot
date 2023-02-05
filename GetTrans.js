const sql = require('./db');

module.exports = {

    GetList: (req, res, next) =>{
        var str = "select * from transactions where temp = false order by id desc "
        console.log(str);        
        sql.query(str,async function (error, results, fields){
            if (error) throw error;
        res.status(200).json(results)
        })
    },
    GetListmax: (req, res, next) =>{
       
        var str = "select * from transactions where temp = false order by Amount*1 desc limit 5 "
        sql.query(str,async function (error, results, fields){
            if (error) throw error;
        res.status(200).json(results)
        }) 
    },
    GetTempTrans: (req, res, next) =>{
        var str = "select * from transactions WHERE temp = true"
        sql.query(str,async function (error, results, fields){
            if (error) throw error;
            res.status(200).json(results)
        })
    }
}