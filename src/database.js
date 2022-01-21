const mongoose = require('mongoose');
require( "dotenv").config()
mongoose.connect(process.env.serverWeb, {
    useNewUrlParser: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));