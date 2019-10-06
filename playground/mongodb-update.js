const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp'

MongoClient.connect(url, (err, client)=>{
    if (err) {
        return console.log("unable connect to mogodb")
    }

    console.log('connect to mongodb');

    const db = client.db(dbName);

    // db.collection('todos').findOneAndUpdate({
    //     _id: new ObjectID("5d9793bade3a4a75cb30f813")
    //     },
    //     { $set:
    //         {
    //         completed:false
    //         }
    //     },{
    //         returnOriginal : false
    //     }).then((result)=>{
    //         console.log(result);
    //     })
     
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5d984a1247f5bbd7263c2aa5")
    },
    { $inc: 
        {
        age: 2
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result)
    })

    client.close();

});