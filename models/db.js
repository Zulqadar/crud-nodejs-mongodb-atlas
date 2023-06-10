const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./item.model');