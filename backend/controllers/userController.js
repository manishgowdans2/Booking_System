const User = require('../models/User')

//creating a new tour
 const createUser = async(req,res)=>{
    const newUser = new User(req.body)

    try{
        const savedUser = await newUser.save()

        res.status(200).json({
            success:true,
            message:"Successfully created",
            data:savedUser
        })
    }catch(err){

        res.status(500).json({
            success:false,
            message:"Failed to create. Try again"
        })

    }
}

//update tour
const updateUser = async(req,res)=>{
    //get the id
    const id = req.params.id;
    try{
        const updatedUser = await User.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:"Successfully updated",
            data:updatedUser,
        })

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Not able to update"
        })

    }
}

//delete tour
const deleteUser = async(req,res)=>{
    const id = req.params.id
    try{

        const deletedUser = await User.findByIdAndDelete(id,{
            $delete: req.body
            },{new:true})
        res.status(200).json({
            success:true,
            message:"Successfully deleted",
            data: deletedUser
        })

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Not able to delete"
        })
        
    }
}

//getSingle tour
const getSingleUser = async(req,res)=>{
    const id = req.params.id
    try{

        const User = await User.findById(id)

        res.status(200),json({
            success:true,
            message:"Get all data",
            data:User
        })

    }catch(err){

        res.status(404).json({
            success:false,
            message:"Not found"
        })
        
    }
}

//getAll tour
const getAllUser = async(req,res)=>{

    
    try{

        const Users = await User.find({})

        res.status(200).json({
            success:true,
            message:"View all data",
            data: Users
        })

    }catch(err){
        res.status(404).json({
            success:false,
            message:"Not found"
        })
        
    }
}



module.exports = {createUser, updateUser, getAllUser, getSingleUser, deleteUser,}