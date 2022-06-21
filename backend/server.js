
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/Database');

connectDatabase();
// connecting the server 
dotenv.config({
    path: "backend/config/.env"
});
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`This is connected on port ${PORT}`);
});
