import User from "../model/userModel.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

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

export const Signin = async(req, res, next) =>{
    const {email, password} = req.body;
    if(!email || !password || email === "", password === ""){
        return next(errorHandler(400, "All fields are required"))
    }
    try {
        const validUser = await User.findOne({email})
        if(!validUser){
            return next(errorHandler(404, "user not found"))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            return next(errorHandler(400, "invalid password"))
        }
        const token = jwt.sign(
            {id: validUser._id}, process.env.JWT_SECRET
           
        );
        const  { password: pass, ...rest } = validUser._doc;   

        res.status(200).cookie("access_token", token, {
            httpOnly: true
        })
        .json(rest)
    } catch (error) {
        next(error)
    }
} 