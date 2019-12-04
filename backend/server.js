require('dotenv').config({ path: __dirname+'/../.env' });
const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
const port = process.env.PORT || 4000;

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: 'ap2'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // The calls to our endpoint will be coming in from a different origin.
    // Therefore, we need to make sure we include the CORS headers (Access-Control-Allow-Origin).
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.post("/ping", (req, res) => {
    const {lat,lng} = req.body;
    const data = {
        lat,
        lng
    };
    console.log("POST(receive): ",data);
    // The trigger is achieved using the trigger method which takes the 
    // trigger identifier(location), an event name (ping), and a payload.
    pusher.trigger("location", "ping", data);

    res.json(data);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});