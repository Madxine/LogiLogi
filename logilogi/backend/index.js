const express = require('express');
const cors = require('cors');
const app = express();
require ('dotenv').config();
require ('colors');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runs on port: ${port}`))
