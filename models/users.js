let mongoose = require('mongoose');
let userSchema = new Schema({
    name:String,
    emailid:{
        type: String,
        unique: true,
    },
    password:String,
    role: {
        type: String,
        enum: ["HR", "EMPLOYEE"],
    }
})
let User = mongoose.model('User', userSchema);
module.exports = User;