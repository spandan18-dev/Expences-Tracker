import mongoose from 'mongoose'

const expSchema =new mongoose.Schema({
    expence :{
        type:String,
        required : true,
        trim:true
    },

    amount :{
        type :Number,
        required :true,
        trim:true
    },
    time :{
        type:Date,
        default : Date.now()
    }
})

const expences = mongoose.model("expence",expSchema)

export default expences