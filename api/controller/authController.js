import User from "../model/userModel.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"

export const Signup = async(req, res, next) =>{
    const {username, email, password} = req.body

    if(!username || !email || !password || username === "" || email === "" || password === "" ){
       next(errorHandler(400, "all fields are required add in"))
    } 
    const hashpassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
          username,
          email,
          password: hashpassword
    })
    try {
        await newUser.save()
        res.json("Sign up successfully")
    } catch (error) { 
       next(error)
    }
} 