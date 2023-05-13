const express = require('express')
const users = require('../model/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const {security} = require('../middleware/authMiddleware')


const router = express()

//create new user
router.post("/new" , asyncHandler(async (req, res) =>{
    const {name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please enter fields')
        
    }
    //Check if user exist

    const userExist = await users.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error("User already exists")
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hasedPassword = await bcrypt.hash(password, salt)
    
    //Create new user
    const user = await users.create({
        name,
        email,
        password: hasedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateJWT(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

}))

//Login user
router.post("/login" , asyncHandler(async(req, res) =>{
    const{email, password} = req.body

    //Confirm user by email and match the password
    const confirm = await users.findOne({email})

    if(confirm && (await bcrypt.compare(password, confirm.password))){
        res.status(201).json({
            _id: confirm.id,
            name: confirm.name,
            email: confirm.email,
            token: generateJWT(confirm._id)
        })

    }else{
        res.status(400)
        throw new Error("Invalid login credentials")
    }
   
}))

//Get all users
router.get("/users", security, (req, res) =>{
    res.json({message:'Data for all users'})
})

//Generate JWT
const generateJWT = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '20d'})
}

module.exports = router