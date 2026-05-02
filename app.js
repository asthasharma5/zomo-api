import dotenv from "dotenv";
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');


const router = require('./Router/index');
const cors=require('cors');
const app = express();

 const port =process.env.PORT || 2001;
const hostname = '0.0.0.0';

const localDB = process.env.LOCAL_DB;
const serverDB = process.env.SERVER_DB;

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

