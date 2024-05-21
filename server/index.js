const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
// dotenv.config();

async function connectDB() {
  try {
    // Replace <username>, <password>, and <yourDatabaseName> with your actual MongoDB Atlas credentials and database name
    const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.t2qncee.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

    // Create a new MongoClient instance
    const client = new MongoClient(url);

    // Connect the client to the server
    await client.connect();

    // Access the specific database
    const db = client.db(process.env.DB_NAME);

    // Query the 'aulvault' collection
    const Users = db.collection('users')
    const result = await Users.find().toArray();//Read operation

    //To create additional users(CREATE OPERATION)
    await Users.insertOne({name:"Wole", matric:"AUL/CMP/22/89" , level:"200"});

    //UPDATE OPERATION
    // await Users.updateOne({_id: '664c52f20a0483e2ccbbf9f7'}, {$set: {name:"jeho"}});

    // Log the result
    console.log(result);

    // Close the connection
    await client.close();
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
}

// Execute the function to connect to the database
connectDB();
