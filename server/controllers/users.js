import mongoose from "mongoose";

import users from '../models/auth.js';

export const getAllUsers = async (req,res)=>{
    try {
        const allUsers = await users.find();
        const allUserDetails = [];

        allUsers.forEach((user) =>{
            allUserDetails.push({_id: user._id, name: user.name, location: user.location ,dob: user.dob, about: user.about, tags: user.tags, joinedOn: user.joinedOn})
        });
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateProfile = async (req, res) =>{
    const { id: _id} = req.params;
    const { name,location, about, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("User unavailable....");
    }

    try {
        const updatedProfile =await users.findByIdAndUpdate(_id, {$set: {'name': name,'location': location, 'about': about, 'tags': tags}},{new: true});
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({message: error.message})
    }

}