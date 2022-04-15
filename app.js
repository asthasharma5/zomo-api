const express = require('express');
const mongoose = require('mongoose');

const router = require('./Router/index');
const cors=require('cors');
const app = express();

 const port =process.env.PORT || 2001;
const hostname = '0.0.0.0';

const localDB = 'mongodb://127.0.0.1:27017/zomato_27';
const serverDB = 'mongodb+srv://zomato_27:astha11@cluster0.me61q.mongodb.net/Zomato_27?retryWrites=true&w=majority';

app.use(cors());
app.options('*',cors());
app.use(express.json());
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));

