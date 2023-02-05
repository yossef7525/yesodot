const sql = require('./db')
const Findnew = require('./DeleteLastNew')


module.exports = {
    popup: (req, res, next) => {
        const {id} = req.body
        var str = `update transactions set temp = false where id = ${id}`
        sql.query(str, function(err, result, fields) {
            if (err) throw err;
            Findnew.FindLastNew(id)
            res.status(200).json(result);
        })
    }
}