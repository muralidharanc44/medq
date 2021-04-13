const mongoose = require('mongoose');
require("dotenv").config;

const uri =  process.env.APP_ENV === 'Dev' ? `mongodb://${process.env.DB_USER ? process.env.DB_USER + ':' : ''}${
    process.env.DB_PASS ? encodeURIComponent(process.env.DB_PASS) + '@' : ''
}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}${
    process.env.DB_AUTH_METHOD !== 'None' ? '?authSource=admin' : ''
}` : `mongodb+srv://admin:admin@cluster0.jwp6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./src/schema/user.schema');
