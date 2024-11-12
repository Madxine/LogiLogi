const express = require('express');
const cors = require('cors');
const app = express();
require ('dotenv').config();
require ('colors');
const port = process.env.PORT || 5000;
const connectDB = require('./dbinit');
const items = require('./routes/items');

connectDB();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {console.log(req.path, req.method), next()});

//my routes
app.use('/items', items);
app.use('/', (req, res) => {
    res.send('Welcome to my API');
});



app.listen(port, () => console.log(`Server runs on port: ${port}`))
