import mongoose from 'mongoose'
const MONGODB_URI = "mongodb+srv://ajay87891:Aj%40y1234@cluster0.yozyewx.mongodb.net/Ajay-blogs"
// const mongoURI = "mongodb://localhost:27017/Ajay"
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }
// async function connectToMongo () {
//     if (cached.conn) {
//       return cached.conn
//     }
  
//     if (!cached.promise) {
  
//       cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => {
//         return mongoose
//       })
//     }
//     cached.conn = await cached.promise
//     return cached.conn
//   }

const connectToMongo = async()=>{
 await  mongoose.connect(MONGODB_URI).then(()=>console.log("Conneted to MongoDB")).catch(err=>console.log(err));
 
}

  export default connectToMongo

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI).then(()=>console.log("Conneted to MongoDB")).catch(err=>console.log(err));
   
// }
// module.exports = connectToMongo;