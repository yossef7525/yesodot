// import module
const express = require('express');
const app = express();
const serveStatic = require('serve-static')
const path = require('path')

const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const Lastid = require('./GetLastId');
const routes = require('./api')

app.use('/', serveStatic(path.join(__dirname, '/dist/yesodot-client')))

app.use(bodyParser.urlencoded({
    parameterLimit: 200000,
    limit: '50mb',
    extended: false
  }))
  app.use(cors())
  app.use(bodyParser.json());
  // settings
  const config = {
      PORT: 3000
    };
    
    // return LastId in History , end play import history
    Lastid.GetLastIdHistory();
    
    // return LastId in Keva , end play import Keva
    Lastid.GetLastIdKeva();
    
    
    
    //routs for application
    app.use('/api', routes)
    app.get(/.*/, function (req, res) {
      res.sendFile(path.join(__dirname, '/dist/angular-router/index.html'))
    })
// create the server
app.listen(config.PORT, ()=>{
    console.log(`app is lisening in url: http://localhost:${config.PORT}`);
})
