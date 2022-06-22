const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));




const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true,useNewURLParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('Connected')
});

const routes = require('./src/routes/user.routes');

app.use('/', routes);


app.listen(port, () => console.log(`Listening on port ${port}`));