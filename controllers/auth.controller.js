const User = require("../models/auth.model");
const generateToken = require("../lib/utils/generateToken");

const signUp = async (req, res) =>{
          try {
                    const {username, password, name, email} = req.body;

                    if(!username || !password || !name || !email) {
                              return res.status(400).json({message: "All fields are required"});
                    }

                    const userExists = await User.findOne({name, email});
                    if(userExists){
                              return res.status(400).json({message: "User already exists"});
                    }

                    const newUser = new User({
                              username,
                              password,
                              name,
                              email,
                    })

                    if(newUser){
                              generateToken(newUser._id, res);
                              await newUser.save();
                              res.status(201).json(newUser);
                    }

          } catch (error) {
                    console.log(error.message);
                    res.status(500).json({message: error.message});
          }
}

const logIn = async (req, res) =>{
          try {
                    const {username, password} = req.body;

                    if(!username || !password) {
                              return res.status(400).json({message: "All fields are required"});
                    }

                    const user = await User.findOne({username});
                    if(!user) return res.status(404).json({message: "User not found"});

                    const isMatch = await (password === user.password);
                    if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

                    generateToken(user._id, res);

                    res.status(200).json(user);


          } catch (error) {
                    console.log(error.message);
                    res.status(500).json({message: error.message});
          }
}

const logOut = (req, res) =>{
          try {
                    res.cookie('jwt', '', {maxAge:0});
                    res.status(200).json({message: "Logged out successfully"});
          } catch (error) {
                    console.log(error.message);
                    res.status(500).json({message: error.message});
          }
}

module.exports = {signUp, logIn, logOut};