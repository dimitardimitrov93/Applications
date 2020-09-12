const mongoose = require('mongoose');

const phonebookEntrySchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    telephoneNumber: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    emailAddress: {
        type: mongoose.Schema.Types.String,
        required: true,
    }
});

const Phonebook = mongoose.model('Phonebook', phonebookEntrySchema);
module.exports = Phonebook;