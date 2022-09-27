//model for our milestone
const mongoose = require('mongoose');

const milestoneSchema = mongoose.Schema({
    //associate user with a milestone
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
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