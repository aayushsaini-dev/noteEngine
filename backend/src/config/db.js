import moongoose from "mongoose";

export const connectDB = async() =>{
    try {
       await  moongoose.connect(process.env.MONGO_URI)
       console.log("Mongodb connected successfully");
    } catch (error) {
        console.error("error connecting mongodb ", error)
    }
}

