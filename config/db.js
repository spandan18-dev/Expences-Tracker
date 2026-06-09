import mongoose from 'mongoose'

const connectdb = async (dburl)=>{
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.error("MongoDB Error:", err);
  });
}
   

export default connectdb