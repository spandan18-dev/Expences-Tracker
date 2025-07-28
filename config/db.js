import mongoose from 'mongoose'

const connectdb = async (dburl)=>{
    try{
        await mongoose.connect(dburl);
        console.log("Db connected....")
    }catch(e){
        console.log(e)
    }
}

export default connectdb