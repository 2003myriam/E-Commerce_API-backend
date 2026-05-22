
const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  name: {type: String,required: true},
  email: {type: String,required: true,unique: true},
  password: {type: String,required: true},
  role:{type:String, enum:['admin','user'],default:'user'},
  created_at:{type:Date ,default:Date.now()},
  logged_at:{type:Date ,default:Date.now()}

})
const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = { Profile };