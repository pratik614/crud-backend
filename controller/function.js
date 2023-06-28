import { User } from "../model/schema.js";

export const addUser = async (req, res) => {
    const user = req.body;
    const newuser = new User(user);
    try {
        await newuser.save();
        res.status(201).json(newuser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUserdata = async (req, res) => {
    try {
        const users = await User.find({});   //since {}is empty it will show all data
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getUser = async (req, res) => {

    try {
        const user = await User.find({ _id: req.params.id });
        //const user =await User.findbyId(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const editUser = async (req, res) => {
    let user = req.body;
    const newuser = User(user);
    try {
        await User.updateOne({ _id: req.params.id }, newuser);
        res.status(201).json(newuser);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteUser = async(req,res)=>{
    try {
        await User.deleteOne({_id:req.params.id});
        res.status(200).json({message:"user deleted successfully"})
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}