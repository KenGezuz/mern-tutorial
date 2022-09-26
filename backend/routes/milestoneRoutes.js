//access point for CRUD 
const express = require('express');
const router = express.Router();
//import controller 
const {getPost, setPost, updatePost, deletePost} = require('../controllers/milestoneController');

//read and create
router.route('/').get(getPost).post(setPost);
//update and delete
router.route('/:id').put(updatePost).delete(deletePost);


module.exports = router;