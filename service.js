//console.log("checking ");
var express = require('express');
var bodyParser = require('body-parser');

// const  express = require('express');
// const bodyparser = require('body-pareser');
// const multiparty = require('connect-multiparty');

var  express = require('express');
var bodyparser = require('body-pareser');
var multiparty = require('connect-multiparty');

const MultipartyMiddleware = multiparty({uploadDir:'./images'});

const morgan = require('morgan');
//const app = express()

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());

app.get('/', (req, res)=>{

    res.status(200).json({

        message: "Testing our Server"
    })
})

app.post('/uploads', MultipartyMiddleware, (req, res)=>{

    console.log(req.files.upload);

})

app.listen(PORT, console.log(`Server has successfully started at: ${PORT}`));