         //Backend framework 
    const express = require('express');
    const colors = require('colors');
        //file to hide private content 
    const dotenv = require('dotenv').config();
         //import status code error middleware
     const {errorHandler} = require('./middleware/errorMiddleware');

     const connectDB = require('./config/db');
        //Access port name from .env 
        //5000 if first value not found
    const port = process.env.PORT || 5000
     
    //call connect mongoDB function
     connectDB();

         //Initialize express
    const app = express();
         //express middleware
         //body parser for raw Json 
    app.use(express.json());
         //URL encoded
    app.use(express.urlencoded({extended : false}));

         //points to routes/milestoneRoutes for create,write,update and delete
    app.use('/api/milestone',require('./routes/milestoneRoutes'));

         //use own error handlers
     app.use(errorHandler);
    
         //run server and output port name
    app.listen(port, () => console.log(`Server is running on ${port}`));