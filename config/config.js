var run = process.env.NODE_ENV || 'local';

if(run == 'local') {
    process.env.PORT = 3000
    process.env.MONGODB_URL = 'mongodb://127.0.0.1/Chat-App'
}

else{
    process.env.MONGODB_URL= 'mongodb://<Somant>:<a123456>@ds225703.mlab.com:25703/hangout-app';
}