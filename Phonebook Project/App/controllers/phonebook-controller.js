const Phonebook = require('../models/phonebook-entry');

module.exports = {
    getIndex: function (req, res) {
        getAll().then((contacts) => {
            return res.render('index', {contacts});
        });
    },
    getCreate: function (req, res) {
        return res.render('create');
    },
    postCreate: function (req, res) {
        let contactInfo = req.body;
        addContact(contactInfo).then(() => {
            return res.redirect('/');
        })
    },
    getEdit: function (req, res) {
        let id = req.params.id;
        findByID(id).then((contact) => {
            return res.render('edit', {contact});
        });
    },
    postEdit: function (req, res) {
        let id = req.params.id;
        let newContactInfo = req.body;
        editContactInfo(id, newContactInfo).then(() => {
            return res.redirect('/');
        });
    },
    getDelete: function (req, res) {
        let id = req.params.id;
        findByID(id).then((contact) => {
            return res.render('delete', {contact});
        });
    },
    postDelete: function (req, res) {
        let id = req.params.id;
        deleteContact(id).then(() => {
            return res.redirect('/');
        });
    },
    searchEntries: function(req, res) {
        let searchItem = req.body.searchItem;
        searchEntries(searchItem).then((result) => {
            // console.log(result);
            return res.render('index', {result});
        });
    },
};

function getAll() {
    return Phonebook.find({});
}

function addContact(contactInfo) {
    return Phonebook.create(contactInfo);
}

function findByID(id) {
    return Phonebook.findById(id);
}

function editContactInfo(id, newContactInfo) {
    return Phonebook.findByIdAndUpdate(id, newContactInfo);
}

function deleteContact(id) {
    return Phonebook.findByIdAndRemove(id);
}

function searchEntries(searchItem) {
    return Phonebook.find({searchItem});
}