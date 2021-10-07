//configure Express to listen on port 8000
const express= require("express");
const app=express();
const port=8000;
app.listen(port,()=>{`Listening in port ${port}` });

//configure cors
const cors = require('cors');
app.use(cors());

//required for post requests to send the data correctly through mongoose
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//connect to DB
require('./config/mongoose.config'); 

//add routes to app
require('./routes/author.routes')(app);
