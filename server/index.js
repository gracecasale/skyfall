const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');
const app = express();
dotenv.config({ path: __dirname + '/.env' }); //this reads variables in .env file and 
//adds them to process.env
const port = process.env.PORT || 4000;
const apiKey = process.env.API_KEY;

//import middleware (powerups!)
const helmet = require('helmet');

//wire up our middleware (powerups!)
app.use(helmet());
const staticPath = path.resolve(__dirname, '../client/build'); //__dirname makes sure we start with the current file
app.use(express.static(staticPath));

app.get('/forecast/coords/:lat,:lon', (req, res) => {
    // const lat = req.params.lat; <-- can also be written this way
    // const lon = req.params.lon;
    const { lat, lon } = req.params;
    const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;
    axios.get(url)
        .then(weatherResponse => {
            const weather = weatherResponse.data
            res.status(200);
            res.json({
                weather: weather
            });
        })
        .catch(err => {
            res.status(err.status || 500);
            res.send(err.message || "Uh oh");
        })
});

app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})