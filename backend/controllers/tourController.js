const Tour = require('../models/Tour')

//creating a new tour
 const createTour = async(req,res)=>{
    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save()

        res.status(200).json({
            success:true,
            message:"Successfully created",
            data:savedTour
        })
    }catch(err){

        res.status(500).json({
            success:false,
            message:"Failed to create. Try again"
        })

    }
}

//update tour
const updateTour = async(req,res)=>{
    //get the id
    const id = req.params.id;
    try{
        const updatedTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:"Successfully updated",
            data:updatedTour,
        })

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Not able to update"
        })

    }
}

//delete tour
const deleteTour = async(req,res)=>{
    const id = req.params.id
    try{

        const deletedTour = await Tour.findByIdAndDelete(id,{
            $delete: req.body
            },{new:true})
        res.status(200).json({
            success:true,
            message:"Successfully deleted",
            data: deletedTour
        })

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Not able to delete"
        })
        
    }
}

//getSingle tour
const getSingleTour = async(req,res)=>{
    const id = req.params.id
    try{

        const tour = await Tour.findById(id)

        res.status(200),json({
            success:true,
            message:"Get all data",
            data:tour
        })

    }catch(err){

        res.status(404).json({
            success:false,
            message:"Not found"
        })
        
    }
}

//getAll tour
const getAllTour = async(req,res)=>{

    //for pagination
    const page = parseInt(req.query.page);

    console.log(page)//type ../tours?page=1 to see in api testing
    try{

        const tours = await Tour.find({}).skip(page*5).limit(5)

        res.status(200).json({
            success:true,
            count: tours.length,//to check for the pagination
            message:"View all data",
            data: tours
        })

    }catch(err){
        res.status(404).json({
            success:false,
            message:"Not found"
        })
        
    }
}

//get tour by search
const searchTour = async(req,res)=>{
    const city = new RegExp(req.query.city,"i")//"i" is for case sensitivity
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{

        //gte means greater than and equal
        const tours = await Tour.find({city, distance:{$gte:distance}, maxGroupSize:{$gte: maxGroupSize}})

        res.status(200).json({
            success:true,
            count: tours.length,//to check for the pagination
            message:"View all data",
            data: tours
        })

    }catch(err){
        res.status(404).json({
            success:false,
            message:"Not found"
        })
        
    }
    //for searching .../search?city=london&distance=300&maxGroupSize=10
}


//get Featured tour
const getFeaturedTours = async(req,res)=>{

    
try{
        const tours = await Tour.find({featured:true}).limit(5)

        res.status(200).json({
            success:true,
            count: tours.length,//to check for the pagination
            message:"View all data",
            data: tours
        })

    }catch(err){
        res.status(404).json({
            success:false,
            message:"Not found"
        })
        
    }
}

//get tour count
const getTourCount = async(req,res)=>{
    try{
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({
            success:true,
            data:tourCount
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch"
        })
    }
}

module.exports = {createTour, updateTour, getAllTour, getSingleTour, deleteTour, searchTour,getFeaturedTours, getTourCount}