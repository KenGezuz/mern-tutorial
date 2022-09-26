//desc :   getPost
//route : GET api/milestone
//access : Private
const getPost = (req, res) => {
    res.status(200).json({message: "show milestone"})
}

//desc :  setPost
//route : POST api/milestone
//access : Private
const setPost = (req, res) => {
    res.status(200).json({message: "create milstone"})
}

//desc :   updatePost
//route : PUT api/milestone
//access : Private
const updatePost = (req, res) => {
    res.status(200).json({message: `updated milestone on id: ${req.param.id}` })
}

//desc :   deletePost
//route : DELETE api/milestone
//access : Private
const deletePost = (req, res) => {
    res.status(200).json({message: `milestone deleted on id: ${req.param.id}` })
}
module.exports = {
    getPost,
    setPost,
    updatePost,
    deletePost,
}