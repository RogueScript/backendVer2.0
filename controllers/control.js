const userSchema = require("../models/authentication.js");
exports.controlFile =  (req, res)=>{
    console.log("connect started");
    const user = userSchema(req.body);
    
    user.save((err, user)=>{ if(err) return res.status(400).json({err}) 
    res.json({user})
})
}

