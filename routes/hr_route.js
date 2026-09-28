let express=require('express');
let router=express.Router();

router.get("/viewemp", (req, res) => {
    res.send("viewemp route called");
});
router.post("/assign-task", (req, res) => {
    res.send("assign-task route called");
});
router.delete("/deleteemp", (req, res) => {
    res.send("deleteemp route called");
});
router.get("/viewtask", (req, res) => {
    res.send("viewtask route called");
});
module.exports=router;