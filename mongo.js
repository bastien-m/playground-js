
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nodeclient:nodeclient@capgemini-bastien-smulv.mongodb.net/capgemini-bastien?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    console.log(err)
  const collection = client.db("node-formation").collection("user");
  // perform actions on the collection object
  client.close();
});
