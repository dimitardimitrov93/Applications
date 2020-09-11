const mongoose = require('mongoose');

const mountaineerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    age: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    gender: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    lastSeenDate: {
        type: mongoose.Schema.Types.String,
        required: true,
    }
});

const Mountaineer = mongoose.model('Mountaineer', mountaineerSchema);
module.exports = Mountaineer;