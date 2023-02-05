const express = require('express');
const router = express.Router()

const {GetList, GetListmax, GetTempTrans} = require('./GetTrans')
router.get('/get', GetList)
router.get('/getmax', GetListmax)
router.get('/GetTempTrans', GetTempTrans)

const {popup} = require('./Popup')
router.post('/popup', popup)

const {Insert} = require('./InsertTrans')
router.post('/add', Insert)

const {Update, Delete} = require('./UpDateTrans')
router.post('/update', Update)
router.post('/Delete', Delete)

const {GetAllSettings, GetSumTotal, UpdateSettings} = require('./Settings')
router.get('/settings', GetAllSettings )
router.get('/settingstotal', GetSumTotal )
router.post('/settings', UpdateSettings )

const {login, UpdatePassword} = require('./Login')
router.post('/login', login)
router.post('/UpdatePassword', UpdatePassword)

const {GetNewTrans} = require('./GetNew')
router.post('/GetNewTrans', GetNewTrans )

const {GetListMatrimim, AddMatrim, importMatrimim,deleteMatrimim, UpdateMatrim} = require('./GetMatrimim')
router.get('/GetListMatrimim', GetListMatrimim)
router.post('/AddMatrim', AddMatrim)
router.post('/UpdateMatrim', UpdateMatrim)
router.post('/importMatrimim', importMatrimim)
router.post('/deleteMatrimim', deleteMatrimim)
module.exports = router;