import mongoose, { mongo } from "mongoose";


const connectDB = async () => {
    try {
        const connection = await mongoose.connect (
            `${process.env.MODEL_URL}`
        )
        console.log ("Mongodb Connected")
    }
    catch (error) {
        console.log ("Cannot coneect Mongodb")
        process.exit(1)
    }
}

export default connectDB