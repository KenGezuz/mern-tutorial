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
    //error handling for body text
    if(!req.body.text){
        res.status(400).json;
        throw new Error('Please add a milestone');
    }
    res.status(200).json({message: "create milstone"})
}

//desc :   updatePost
//route : PUT api/milestone
//access : Private
const updatePost = (req, res) => {
    res.status(200).json({message: `updated milestone on id: ${req.params.id}`})
}

//desc :   deletePost
//route : DELETE api/milestone
//access : Private
const deletePost = (req, res) => {
    res.status(200).json({message: `milestone deleted on id: ${req.params.id}` })
}
module.exports = {
    getPost,
    setPost,
    updatePost,
    deletePost,
}