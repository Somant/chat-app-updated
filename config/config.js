var run = process.env.NODE_ENV || 'local';

if(run == 'local') {
    process.env.PORT = 3000
    process.env.MONGODB_URL = 'mongodb://127.0.0.1/Chat-App'
}

else{
    var MONGODB_URI="mongodb://<Somant>:<1234>@ds251849.mlab.com:51849/mongoose-db";
}