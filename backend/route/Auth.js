const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');

router.post('/login',async(req,res)=>{
    const { email,password } = req.body;

    if( !email || !password )
        return res.status(400).json({
            message : "email and password are required"
        })

    const currUser = await User.findOne({
        email
    });
    
    if( !currUser )
        return res.status(400).json({
            message : "user doesn't exist"
        });

    const match = bcrypt.compare(password,currUser?.password);

    if( !match )
        return res.status(400).json({
            message : "passwrod didn't match"
        })

    return res.json({
        message : "passwrod matched"
    })

});

router.post('/register',async(req,res)=>{
    const { email,password } = req.body;

    if( !email || !password )
        return res.status(400).json({
            message : "email and password are required"
        })

    const exists = await User.findOne({ email });
    console.log(exists);

    if( exists )
        return res.status(400).json({
            message : 'user already exists'
        });

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await User.create({
        email,
        password : hashedPassword
    });

    console.log(newUser);

    return res.status(201).json({
        message : "user created"
    });
})

module.exports = router;