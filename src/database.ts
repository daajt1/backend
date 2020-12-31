import mongoose, {ConnectionOptions} from 'mongoose'
import config from './config'
(async ()=> {
   try {
    const mongooseOptions : ConnectionOptions = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        authSource: "admin",
       user: config.MONGO_USER,
        pass: config.MONGO_PASSWORD 
    }
    const db = await mongoose.connect(
        'mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}}', 
        mongooseOptions)
    console.log("db connected", db.connection.name)
   }catch(e){
       console.log(e)}
    
})