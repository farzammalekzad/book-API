const path = require('path');


const express = require('express');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');

//config ENV
dotEnv.config({path: './config/config.env'});

//Connect Database
connectDB();

const app = express();

//config Morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//Set View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//set static
app.use(express.static(path.join(__dirname,'public')));


//set Routes
app.use('/', require('./routes/lib'));


app.listen(3000, () => {
    console.log(`server running on ${process.env.NODE_ENV} mode in port ${process.env.PORT} `);
})
