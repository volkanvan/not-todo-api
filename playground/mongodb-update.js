const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    var db = client.db('Todos');

    // db.collection('Todos')
    //     .findOneAndUpdate(
    //         {_id: new ObjectID('5bf90d4b9ef6153e42cc1f87')}, 
    //         {$set: {completed: true}},
    //         {returnOriginal: false}
    //     ).then((result) => {
    //         console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5bf90e6c9ef6153e42cc1fc4')},
        {$set: {name: 'John'}, $inc: {age: 1}},        
        {returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });

    client.close();
});