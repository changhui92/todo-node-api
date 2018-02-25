const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoNode', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').find({text: 'Something'}).toArray().then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err)
  });
  // db.collection('Todos').insertOne({
  //   text: 'Something',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //db.close();
});
