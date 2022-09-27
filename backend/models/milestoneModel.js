//model for our milestone
const mongoose = require('mongoose');

const milestoneSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
},
{
    //for time created and updated
    timestamps: true,
}
)

module.exports = mongoose.model('Milestone',milestoneSchema)