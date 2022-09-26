         //Backend framework 
    const express = require('express');
        //file to hide private content 
    const dotenv = require('dotenv').config();
        //Access port 
    const port = 5000;
        

         //Initialize express
    const app = express();
         //run server and output port name
    app.listen(port, () => console.log(`Server is running on ${port}`));