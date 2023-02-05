const importHistory = require('./ImportHistoryNedarim');
const importkeva = require('./ImportKevaNedarim')
const sql = require('./db')
module.exports = {

GetLastIdHistory(){
    var str = `select * from transactions where KevaId ="" order by TransactionId desc limit 1`
    sql.query(str,async function (error, results, fields){
        if (error) throw error;
        if(results.length >0){
            importHistory.Import(results[0].TransactionId)

        }else{
            importHistory.Import(15582122)
    }
    })

},
 GetLastIdKeva(){
    var str = `select * from transactions where KevaId is not null order by TransactionId desc limit 1`
    sql.query(str,async function (error, results, fields){
        if (error) throw error;
        if (results.length >0){

            importkeva.Import(results[0].KevaId)
        }else{
            importkeva.Import(537983)
        }
    })

 }
}