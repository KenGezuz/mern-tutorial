const asyncHandler = require('express-async-handler');
const Milestone = require('../models/milestoneModel');

//desc :   getPost
//route : GET api/milestone
//access : Private

const getPost = asyncHandler (async (req, res) =>{

    //get our milestone via model from database
    const milestones = await Milestone.find();

    res.status(200).json(milestones);
})

//desc :  setPost
//route : POST api/milestone
//access : Private
const setPost = asyncHandler (async (req, res) => {
    //error handling for body text
    if(!req.body.text){
        res.status(400).json;
        throw new Error('Please add a milestone');
    }
    /*else add text to database*/
    
    const milestone = await Milestone.create({
     text: req.body.text,
    });
    res.status(200).json(milestone);

})

//desc :   updatePost
//route : PUT api/milestone
//access : Private
const updatePost = asyncHandler (async (req, res) => {

    const milestone = await Milestone.findById(req.params.id);

    if(!milestone) {
        res.status(400);
        throw new Error('Milestone not found')
    }

    const updatedMilestone = await Milestone.findById(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedMilestone);

})

//desc :   deletePost
//route : DELETE api/milestone
//access : Private
const deletePost = asyncHandler(async (req, res) => {
    const milestone = await Milestone.findById(req.params.id);
    if(!milestone) {
        res.status(400);
        throw new Error('Milestone not found')
    }

    await milestone.remove();
    res.status(200).json({id: req.params.id})
})


module.exports = {
    getPost,
    setPost,
    updatePost,
    deletePost,
}