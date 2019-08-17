const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    Band.find({}).then((bands) => {
      res.render('index', {bands});
    })
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Band.create(req.body).then(() => {
      res.redirect('/');
    })
  },
  getEdit: function (req, res) {
    let id = req.params.id;
    Band.findById(id).then((band) => {
      res.render('edit', {band})
    })
  },
  postEdit: function (req, res) {
    let id = req.params.id;
    Band.findByIdAndUpdate(id, req.body).then(() => {
      res.redirect('/');
    })
  },
  getDelete: function (req, res) {
    let id = req.params.id;
    Band.findById(id).then((band) => {
      res.render('delete', {band});
    })
  },
  postDelete: function (req, res) {
    let id = req.params.id;
    Band.findByIdAndDelete(id).then(()=> {
      res.redirect('/');
    })
  }
};