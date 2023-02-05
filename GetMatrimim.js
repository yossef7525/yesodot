const sql = require('./db');

module.exports = {
    GetListMatrimim: (req, res, next) => {
        var str = `select matrimim.*, transactions.sumcount from matrimim
        left join (select matrim, sum(transactions.Amount) as sumcount from transactions group by matrim ) transactions ON transactions.matrim = matrimim.nomberinfo  
        `
        sql.query(str, function(err, results){
            if (err) throw err;
            res.status(200).json(results)
        })

    },
    AddMatrim: (req, res, next)=>{ 
        const {name, yahd, nomberinfo} = req.body;
        var str = `insert into matrimim (name, yahd, nomberinfo) values(
            '${name.replace(/'/g, "\\'")}',
            ${yahd},
            ${nomberinfo}
        )`
        sql.query(str, function(err, results){
            if (err) throw err;
            res.status(200).json(results)
        })
    },
    importMatrimim: (req, res, next)=>{
        const data = req.body
        data.forEach(element => {
            var str = `insert into matrimim (name, yahd, nomberinfo) values(
                '${element.name.replace(/'/g, "\\'")}',
                ${element.yahd},
                ${element.nomberinfo}
            )`
            sql.query(str, function(err, results){
                if (err) throw err;
            }) 
        });
        res.status(200).json(results)
    },
    UpdateMatrim: (req, res, next)=>{
        const {id, name, yahd, nomberinfo} = req.body;
        var str = `update matrimim set 
        name='${name.replace(/'/g, "\'")}',
        yahd=${yahd},
        nomberinfo=${nomberinfo}
        where id = ${id}`
        sql.query(str, function(err, results){
            if (err) throw err;
            res.status(200).json(results)
        })

    },
    deleteMatrimim: (req, res, next)=>{
        const {id} = req.body
        var str = `delete from matrimim where id = ${id}`
        sql.query(str, function(err, results){
            if (err) throw err;
            res.status(200).json(results)
        })
    }
}