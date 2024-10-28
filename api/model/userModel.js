import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        uniques: true
    },
    email: {
        type: String,
        required: true,
        uniques: true
    },
    password: {
        type: String,
        required: true  
    },
}, {timestamps: true}

)   

const userModel = mongoose.model("User", userSchema)
    
export default  userModel