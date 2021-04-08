const mongoose = require('mongoose');

mongoose.connect('mongodb://Localhost/PWA2021', { useNewUrlParser: true}, function (error){
    if(error){
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});

module.exports = mongoose;