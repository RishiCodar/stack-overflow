import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{type: String , required:true},
    email:{type: String , required:true, unique: true},
    dob: {type: Date, required: true},
    password:{type: String , required:true},
    location:{type: String},
    about:{type: String  },
    tags:{type: [String] },
    joinedON:{type: Date , default: Date.now},
})

export default mongoose.model("User",userSchema);