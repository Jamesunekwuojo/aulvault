const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.t2qncee.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

async function connectDB() {
  try {
    await mongoose.connect(dbURL);
    console.log("Database connected successfully");

    // Perform CRUD operations after successful connection

    await crudOP();
  
  } catch (err) {
    console.log("Database connection error", err);
  }
}
connectDB();


async function crudOP() {
  try {
    const collection = mongoose.connection.db.collection('users');

    // <------READ------>
    const result = await collection.find().toArray();
    console.log("read all documents:", result );

    // <-----CREATE----->
    // const insertResult = await collection.insertOne({ name: 'John Doe', email: 'john.doe@example.com' });
    // console.log("Inserted document:", insertResult);
    
   
    // <------UPDATE------>
    // const filter = { _id: new mongoose.Types.ObjectId("664cccd93f3c2e0c3fb37521") };
    // const update = { $set: { name: 'Mona' } };
    // const updateResult = await collection.updateOne(filter, update);
    // console.log("Updated document:", updateResult);
    

    
    // <------DELETE------>
    // const filter ={_id: new mongoose.Types.ObjectId("664cccd93f3c2e0c3fb37521")}   
    // const deleteResult = await collection.deleteOne(filter);
    // console.log("Deleted document:", deleteResult);



  } catch (err) {
    console.log("Error performing CRUD operations", err);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }

 
}


// Execute the function to connect to the database and perform operations

