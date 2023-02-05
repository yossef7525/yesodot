const sql = require('./db')

module.exports = {
    login: (req, res, next) => {
        const {password} = req.body
        var str = `select password from settings`
        sql.query(str, function(err, result) {
            if (err) throw err;
            if (result[0].password === password){
            res.status(200).json({login:true})
        }else{
             res.status(200).json({login:false})

            }
        })
    },
    UpdatePassword: (req, res, next) => {
        const {password} = req.body
        var str = `update settings set password = ${password} where id=1`
        sql.query(str, function(err, result) {
            if (err) throw err;
            res.status(200).json(result)
        })
    }
}