import mongoose from 'mongoose'
const connectTodb=async()=>{
try {
    const res=await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB")
} catch (error) {
  
    console.log(error.nessage);
}
}
export default connectTodb;