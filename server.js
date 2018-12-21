//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-ang7'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/my-ang7/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

/**
"scripts": {
    "ng": "ng",
    "start": "node server.js",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "postinstall": "ng build --prod --build-optimizer",
    "heroku-postbuild": "ng build --prod --build-optimizer"
},
*/
