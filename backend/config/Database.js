const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
path: "backend/config/.env"
});
const DB = process.env.DB;
const connectDatabase = () =>{
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        }).then((data) =>{
            console.log(`database is connected with port ${ data.connection.host}`);
        }).catch((err)=>{
            console.log(err);
        });
}

module.exports = connectDatabase;