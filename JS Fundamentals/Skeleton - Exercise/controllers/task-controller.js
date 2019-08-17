const Task = require('../models/Task');

module.exports = {
  getIndex: function (req, res) {
 Task.find().then(task=>{
      res.render('index',{
        'openTasks': task.filter(t=>t.status === "Open"),
        'inProgressTasks': task.filter(t=>t.status === "In Progress"),
        'finishedTasks': task.filter(t=>t.status === "Finished")
      });
    });
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Task.create(req.body).then(()=>redirect('/')).catch(()=>res.redirect('/'));
  },
  getEdit: function (req, res) {
    res.render('edit');
  },
  postEdit: function (req, res) {
    Task.findByIdAndUpdate(req.params.id).then(task=>res.render('edit')).catch(task=>res.render('/'));
  },
  getDelete: function (req, res) {
    res.render('delete');
  },
  postDelete: function (req, res) {
    Task.findByIdAndRemove(req.params.id).then(task=>res.render('/')).catch(task=>res.render('/'));
  }
};