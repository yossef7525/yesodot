const axios = require('axios');
const sql = require('./db')
const Findnew = require('./DeleteLastNew')
var matrimim

var str = 'SELECT * FROM matrimim'
sql.query(str,async function (error, results, fields){
    if (error) throw error;
    matrimim = results
    console.log(matrimim);
})
module.exports = {


Import(Lastid){ setInterval(()=>{
    var temp
    var str = 'SELECT * FROM settings'
    sql.query(str,async function (error, results, fields){
        if (error) throw error;
        if (results[0].popup){
            temp = false
        }else{
            temp = true
        }
        axios.get(`https://matara.pro/nedarimplus/Reports/Manage3.aspx?Action=GetKevaJson&MosadId=1000347&ApiPassword=ka639&Lastid=${Lastid}`).then((response) => {
            console.log(response.data.length);
            max = response.data.length
            if (response.data.length == 0){
                console.log("null")
            }else {
                response.data.forEach(element => {
                var x =  matrimim.find(({name})=> name === element.Groupe)
                console.log(element.Groupe + matrimim.find((e)=>{e.name === element.Groupe}));
                if (x){
                element.Matrim = x.nomberinfo
                }else{
                element.Matrim = 0 
                }
                   
                    var str = `INSERT INTO transactions (ClientName, Amount, Groupe, Comments, TransactionId, KevaId, matrim, new, temp) VALUES (
                        '${element.ClientName.replace(/'/g, "\\'")}',
                         '${element.Amount * element.Itra}',
                        '${element.Groupe.replace(/'/g, "\\'")}',
                         '${element.Comments.replace(/'/g, "\\'")}',
                         '${element.TransactionId}',
                          '${element.KevaId}',
                          ${element.Matrim},
                          true,
                          ${temp})`
                          console.log(str)
                    sql.query(str,async function (error, results, fields){
                        if (error) throw error;
                        Findnew.FindLastNew(results.insertId)
                    })
                });
            Lastid = response.data[max -1].KevaId
            console.log(response.data[max -1])
            // http post new Transe
            }
        })
    })
    }, 60000)
}
}