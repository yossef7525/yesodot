const sql = require('./db');

module.exports = {
    Update: (req, res, next) => {
        const {id, ClientName, Amount, Groupe, Comments, matrim} = req.body;
        var str = `UPDATE transactions SET
        ClientName='${ClientName? ClientName.replace(/'/g, "\\'") : ''}' ,
        Amount='${Amount}' ,
        Groupe='${Groupe ? Groupe.replace(/'/g, "\'") : ''}' ,
        Comments='${Comments? Comments.replace(/'/g, "\\'") : ''}' ,
        matrim=${matrim ? matrim : 0}
         WHERE id=${id}`
         console.log(str);
        sql.query(str,async function (error, results, fields){
            if (error) throw error;
        res.status(200).json(results)
        })
    },

    Delete: (req, res, next)=>{
        const {id} = req.body
        var str = `delete from transactions where id=${id}`
        sql.query(str,async function (error, results, fields){
            if (error) throw error;
            res.status(200).json(results)
        })
    }
}