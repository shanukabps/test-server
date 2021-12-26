const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('X-Frame-Options','allow-from *')
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen((process.env.PORT || 5000), (a) => {
    console.log(a)
    console.log('listening on port 5000')
})