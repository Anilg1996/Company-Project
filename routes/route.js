const express = require('express');
const router = express.Router();
const {createUser,loginUser,getUser} = require("./controller/userController");
const {messageSave} = require("../controller/messageController")
module.exports = router

//-------------------------------------Handling Handled route---------------------------------
router.post("/register",createUser);
router.post("/login",loginUser);
router.get("/getuser/:id",getUser);
router.post("/messages",messageSave)


//------------------------------------Handling unhandled route---------------------------------
router.all("/*", function (req, res) {
    return res.status(400).send({ status: false, msg: "Path not found" })
});