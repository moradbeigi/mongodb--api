const {MongoClient,ObjectID }= require('mongodb');
var obj = new ObjectID();
console.log(obj);
//conection url
const url = 'mongodb://localhost:27017';
//database name
const dbName = 'TodoApp'

MongoClient.connect(url, (err, client)=>{
    
    if (err) {
        return console.log("unable conect to monogoDB")
    }
    console.log("conected to mogoDB");

    const db = client.db(dbName);

//    db.collection('todos').find({completed: true}).toArray().then((docs)=>{
//        console.log('todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//    }, (err)=>{
//         console.log('unable to fetch', err);
//    });

// db.collection('Users').count().then((count) =>{
//     console.log(`Users count is ${count}`);
     
// }, (err)=>{
//      console.log('unable to fetch', err);
// });


    db.collection('Users').find().toArray().then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err)=>{
        console.log('unable to fetch', err)
    });

    client.close();
});

