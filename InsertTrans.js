const sql = require('./db');
const Findnew = require('./DeleteLastNew')


module.exports = {
    Insert: async (req, res, next)=>{
        var tempp
         var str = 'SELECT * FROM settings'
 sql.query( str ,async function (error, results, fields){
      if (error) throw error;
    console.log(results);
    if (results[0].popup){
        tempp = false
    }else{
        tempp = true
    }
        const {ClientName, Amount, Groupe, Comments, matrim} = req.body;
        var str = `INSERT INTO transactions(ClientName, Amount, Groupe, Comments, matrim, new, temp) values(
            '${ClientName.replace(/'/g, "\\'")}',
            '${Amount}',
            '${Groupe.replace(/'/g, "\\'")}',
             '${Comments? Comments.replace(/'/g, "\\'") : ''}',
              ${matrim},
              true,
              ${tempp})`
              console.log(str);
        sql.query(str, function(err, results, fields) {
            if (err) throw err;
            Findnew.FindLastNew(results.insertId)
            res.status(200).json({message: 'success', data: results})
        })
    

})

}
}