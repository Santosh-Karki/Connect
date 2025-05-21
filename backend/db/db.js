import mongoose from 'mongoose';


export const connDb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`database connected successfully: ${conn.connection.host}`)

    }catch(error){
        console.log('MongoDb connection error:',error.message);
        process.exit(1);

    }
}