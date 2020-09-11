const Mountaineer = require('../models/phonebook-entry');

module.exports = {
    getIndex: function (req, res) {
        getAll().then((mountaineers) => {
            return res.render('index', {mountaineers});
        });
    },
    getCreate: function (req, res) {
        return res.render('create');
    },
    postCreate: function (req, res) {
        let mountaineerInfo = req.body;
        addMountaineer(mountaineerInfo).then(() => {
            return res.redirect('/');
        })
    },
    getEdit: function (req, res) {
        let id = req.params.id;
        findByID(id).then((mountaineer) => {
            return res.render('edit', {mountaineer});
        });
    },
    postEdit: function (req, res) {
        let id = req.params.id;
        let newMountaneerInfo = req.body;
        editMountaineerInfo(id, newMountaneerInfo).then(() => {
            return res.redirect('/');
        });
    },
    getDelete: function (req, res) {
        let id = req.params.id;
        findByID(id).then((mountaineer) => {
            return res.render('delete', {mountaineer});
        });
    },
    postDelete: function (req, res) {
        let id = req.params.id;
        deleteMountaineer(id).then(() => {
            return res.redirect('/');
        })
    }
};

function getAll() {
    return Mountaineer.find({});
}

function addMountaineer(mountaineerInfo) {
    return Mountaineer.create(mountaineerInfo);
}

function findByID(id) {
    return Mountaineer.findById(id);
}

function editMountaineerInfo(id, newMountaneerInfo) {
    return Mountaineer.findByIdAndUpdate(id, newMountaneerInfo);
}

function deleteMountaineer(id) {
    return Mountaineer.findByIdAndRemove(id);
}