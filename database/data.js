import mongoose from "mongoose";

export const connectDb =()=>{
    try {
        mongoose.connect("mongodb+srv://pratik:pratik55@crud-app.g8cplsa.mongodb.net/?retryWrites=true&w=majority",{
        dbName:"crud-mern",
    });
    console.log("database is connected");
    } catch (error) {
        console.log(error)
    }
}
