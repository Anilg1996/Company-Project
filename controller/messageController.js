const messageModel = require("../model/messageModel");


//------------- message save --------------------------------------------------

const messageSave = async function(req,res){
    try{
        const newMessage = new Message(req.body);
        const saveMessage = await newMessage.save();
        return res.status(200).send({ status: true, message: "New Message", data:saveMessage });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
      }
};

//-----------------------------exports module------------------------------------

module.exports = {messageSave}