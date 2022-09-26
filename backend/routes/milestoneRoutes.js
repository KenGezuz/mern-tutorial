const express = require('express');
const router = express.Router();

//Access point for Get
router.get('/', (req, res) => {
    res.status(200).json({message: "Hellow work first output"})
})

module.exports = router;