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

    db.collection('todos').insertOne({
        text:"new mongo server",
        completed:false, 
    },(err, result)=>{
        if (err) {
            return console.log('unable to insert to todos', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    db.collection('Users').insertOne({
        name:"ehsan",
        age:28,
        location:"tehran",
        email:'ehsanmora91@gmail.com' 
    },(err, result)=>{
        if (err) {
            return console.log('unable to insert to todos', err)
        }
        console.log((result.ops[0]._id.getTimestamp()));
    })
   

    client.close();
});

