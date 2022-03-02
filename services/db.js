const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let isConnected;

const connectToDB = () => {
    
    if(isConnected) {
        console.log('Utilizando conexión existente a la BD');
        return Promise.resolve()
    }
    //else
    const uri = process.env.MONGO.URL

    return mongoose.connect(uri, { 
        useNewUrlParser: true 
    }).then((db) => {
        isConnected = db.connections[0].readyState;
    }).catch( (err) => console.log(err) );

    
};

module.exports = {
    connectToDB
};