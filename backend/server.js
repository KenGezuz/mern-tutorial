         //Backend framework 
    const express = require('express');
        //file to hide private content 
    const dotenv = require('dotenv').config();
        //Access port name from .env 
        //5000 if first value not found
    const port = process.env.PORT || 5000
        

         //Initialize express
    const app = express();

         //request localhost:5000/api/milestone on postman and respond with message array 
    app.get('/api/milestone', (req, res) => {
        res.status(200).json({message : 'Message recieved'})  
      });
         //run server and output port name
    app.listen(port, () => console.log(`Server is running on ${port}`));