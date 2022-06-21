const Users = require('../model/userModel');
const jwt = require("jsonwebtoken");

// register user 

exports.createUser = async(req, res) =>{
    const {name, email, password} = req.body;
    const user = await Users.create({
        name,
        email,
        password,
        avatar:{
            public_id : "https://test.com",
            url: "https://test.com"
        }
    });
    const SECRET = "fiyin";
    let token = jwt.sign({
          user_id: user._id,
          name: user.name,
          email: user.email
        },
        SECRET,
        { expiresIn: "7 days" }
      );
    res.status(200).json({
        success: true,
        token,
        user
    });
  
}

// login user 

exports.loginUser = async(req, res, next) =>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(404).json({
            success: false,
            message: "please enter your correct credentials"
        })
    }
    const user = await Users.findOne({ email }).select("+password");

  if (!user) {
    res.status(404).json({
        success: false,
        message: "Password or Email Error"
    })
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    res.status(404).json({
        success: false,
        message: "User is not found"
    })
  }
  
  res.status(201).json({
    success: true,
    user,
    token
})
}


// generate Token 

const Token = () =>{
    const SECRET = "fiyin";
    let token = jwt.sign({
          user_id: user._id,
          name: user.name,
          email: user.email
        },
        SECRET,
        { expiresIn: "7 days" }
      );
}
Token();