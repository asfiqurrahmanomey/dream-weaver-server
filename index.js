const express = require('express')
const app = express();
const port  = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Dream Weaver Server is Running')
})

app.listen(port,  () => {
    console.log('Dream Weaver Server is running on port', port);
})