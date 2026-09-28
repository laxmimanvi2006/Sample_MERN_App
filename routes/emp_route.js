let express=require('express');
let router=express.Router();
let users=require('../models/users');

router.post("/register", async (req, res) => {

    let data = req.body;
    let newuser = new user(data);
    let result = await newuser.save();
     res.send(result);
});
router.post("/login", (req, res) => {
    let data=req.body;
    res.send("data");
});
router.get("/viewtask", (req, res) => {
    res.send("viewtask route called");
});
router.patch("/updateprofile/:id",async (req, res) => {
    let dsta=req.body;
    if(data.password){
        data.password=await bcrypt.hash(datapassword,10);
    }
    let result=await users.findByIdAndUpdate(res.params.id,{$set:data},{new:true});

    res.send("update profile route called");

});
module.exports=router;