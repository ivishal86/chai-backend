// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
// import { DB_NAME } from './constants.js';
import connectDB from "./db/index.js";
import {app} from './app.js'
// import express from "express";
// import mongoose from "mongoose";

dotenv.config({
    path: './.env'
});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
//         // Error handler for the app
//         app.use((err, req, res, next) => {
//             console.error("ERROR: ", err);
//             res.status(500).send('Something broke!');
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error;
//     }
// })();
