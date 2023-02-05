const sql = require('./db');

module.exports = {
    FindLastNew(id){
       
setTimeout(() =>{
                var strUpdate = `UPDATE transactions SET new=false WHERE id =${id} and temp = false`
                sql.query(strUpdate,async function (error, results, fields){
                    if (error) throw error;
                })
    }, 10000)
    },

}
