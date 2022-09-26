//access point for CRUD 
const express = require('express');
const router = express.Router();
//import controller 
const {getPost, setPost, updatePost, deletePost} = require('../controllers/milestoneController');

//read
router.get('/',getPost);
//create
router.post('/',setPost);
//update
router.put('/:id',updatePost);
//delete
router.delete('/:id', deletePost);

module.exports = router;