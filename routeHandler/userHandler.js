
const express = require('express') ;
const mongoose = require('mongoose') ;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router();
const userSchema = require('../schemas/userSchema') ;
const User = new mongoose.model("User", userSchema);
 

  


router.post('/signup', async (req, res) => { 
    try {
       
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword
        });

        await newUser.save();

        res.status(200).json({
            message: "Sign up was successful!"
        });

    } catch (err) {
        console.error("Signup Error:", err.message); 
        res.status(500).json({
            error: "Signup failed",
            details: err.message 
        });
    }
}); 


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username }); 

        if (user) { 
           
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            
            if (isValidPassword) {
              
                const token = jwt.sign({
                    username: user.username,
                    userId: user._id
                }, process.env.JWT_SECRET_TOKEN, {
                    expiresIn: '1h'
                });
                
                res.status(200).json({
                    "access-token": token,
                    "message": "Login successful!"
                });
            } else {
                res.status(401).json({
                    "Error": "Authentication Failed"
                });
            }
        } else {
            res.status(401).json({
                "Error": "Authentication Failed"
            });
        }
    } catch (err) {
        console.error(err); 
        res.status(401).json({
            "Error": "Authentication Failed"
        });
    }
});


 module.exports = router ;