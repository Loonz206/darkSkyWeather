const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');
const port = 3000;
const weather = process.env.DARKSKY;


// proxy middleware options
var options = {
    target: 'https://api.darksky.net', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
        '^/api/weather' : '/forecast/' + weather,     // rewrite path
        //'^/api/remove/path' : '/path'           // remove base path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'dev.localhost:3000' : 'http://localhost:8000'
    }
};

// create the proxy (without context)
var darkSkyProxy = proxy(options);

const app = express();
app.use(express.static(__dirname));
app.use('/api', darkSkyProxy);


app.listen(port, () => {
    console.log('listening on port',  port);
});