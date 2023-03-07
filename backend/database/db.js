import mongoose from "mongoose";


const connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-wkyjqlr-shard-00-00.jyjnyaw.mongodb.net:27017,ac-wkyjqlr-shard-00-01.jyjnyaw.mongodb.net:27017,ac-wkyjqlr-shard-00-02.jyjnyaw.mongodb.net:27017/?ssl=true&replicaSet=atlas-fbkuzv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database Connection Sucessfully")
    } catch (error) {
        console.log(`Connection Error`, error)
    }

}

export default connection;