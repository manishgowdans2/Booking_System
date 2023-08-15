const express = require('express')
const {createTour, updateTour, deleteTour, getAllTour, getSingleTour, searchTour, getFeaturedTours,getTourCount}= require("../controllers/tourController")

const router = express.Router();

//create new tour
router.post("/", createTour);
//post helps in adding 

//update tour
router.put("/:id", updateTour);
//put helps in updating

//delete tour
router.delete("/:id", deleteTour);  

//getSingle tour
router.get("/:id", getSingleTour)

//getAll tour
router.get("/", getAllTour)

//search tour
router.get('/search/find', searchTour)//it does not work with just /search

//featured tour
router.get('/search/getFeaturedTours',getFeaturedTours)

//getTour count
router.get('/search/getTourCount', getTourCount)


module.exports = router;