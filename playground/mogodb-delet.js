const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp'

MongoClient.connect(url, (err, client)=>{
    if (err) {
        return console.log("unable connect to mogodb")
    }

    console.log('connect to mongodb');

    const db = client.db(dbName);

    // db.collection('todos').deleteMany({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({location:"tehran"}).then((result)=>{
        console.log(result);
    })

    client.close();

});