import express from "express";
import mongoose from  "mongoose";
import  { PORT, mongoDBURL} from "./config.js"

const app = express();

app.get("/", (request, response) => {
    console.log("test");
    return response.status(234).send("HELLO WORLD.");
});


mongoose
    .connect(mongoDBURL)
    .then(() =>{
        console.log("Connected to Database.");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    });

