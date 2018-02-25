var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose'); //equivalent to var mongoose = require('./db/mongoose').mongoose;
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', async (req, res) => {
  var date = new Date();
  var todo = new Todo({
    title: req.body.title,
    desc: req.body.desc,
    postedAt: String(date)
  });

  try {
    const doc = await todo.save();
    res.send(doc);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send({todos});
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete('/todos/:id', async (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  try {
    const todo = await Todo.findByIdAndRemove(id);
    if(!todo) {
      return res.status(404).send();
    }
    res.send(todo);
  } catch (e) {
    res.status(400).send();
  }
});

app.listen(port, ()=>{
  console.log(`Started up at port ${port}`);
});
