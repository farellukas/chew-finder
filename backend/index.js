'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const yelp = require('yelp-fusion');

const apiKey = process.env.API_KEY;

const app = express();
const port = 5000;
const client = yelp.client(apiKey)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {console.log(`listening on port ${port}`)});

app.get('/api/search', (req, res) => {
    const term = req.query.term;
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const offset = req.query.offset;
    
    const searchRequest = {
        term,
        latitude,
        longitude,
        offset
    };
    console.log(searchRequest)

    client.search(searchRequest).then(response => {
        const body = response.jsonBody;
        res.send(body);
    }).catch(err => {
        console.log(err);
        res.send(err.message);
    });  
})