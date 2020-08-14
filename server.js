const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (reg, res) => {
    res.send([
        {
            'id': 1,
            'name' : 'Lee Seung-man'
        },
        {
            'id': 2,
            'name' : 'Yun Po-sun'
        },
        {
            'id': 3,
            'name' : 'Park Chung-hee'
        },
        {
            'id': 4,
            'name' : 'Chun Doo-hwan'
        },
        {
            'id': 5,
            'name' : 'Roh Tae-woo'
        },
        {
            'id': 6,
            'name' : 'Kim Young-sam'
        },
        {
            'id': 7,
            'name' : 'Kim Dae-jung'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));