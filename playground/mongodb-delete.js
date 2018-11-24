const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    var db = client.db('Todos');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Each lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    client.close();
});