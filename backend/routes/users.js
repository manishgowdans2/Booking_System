const express = require('express')
const {updateUser,deleteUser,getSingleUser,getAllUser}= require("../controllers/userController")

const router = express.Router();

//update User
router.put("/:id", updateUser);
//put helps in updating

//delete User
router.delete("/:id", deleteUser);  

//getSingle User
router.get("/:id", getSingleUser)

//getAll User
router.get("/", getAllUser)