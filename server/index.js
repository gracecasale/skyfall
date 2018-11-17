const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (request, response) => {
    response.status(200);
    response.send('Yayyy!!! It works!');
});

app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})