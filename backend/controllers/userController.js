//desc:     authenticate a user
//route:    Post /api/users/login
//access:   Public
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}

//desc:     register new user
//route:    Post /api/users
//access:   Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

//desc:     Get user data
//route:    Get /api/users/me
//access:   Public
const getMe = (req, res) => {
    res.json({message: 'Display User Data'})
}




module.exports = {
    registerUser,
    loginUser,
    getMe
}