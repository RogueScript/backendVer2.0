const mongoDB = require("mongoose");
const crypto = require('crypto');
const secret = 'klasldge';
const dbSchema = new mongoDB.Schema({name: {
    type: String,
    required: true,
    maxlength: 32,
},
surname: {
    type: String,
    required: true,
    maxlength: 32,
},
email: {
    type: String,
    required: true,
    unique: true,
},
hashedPassword: {
    type: String,
    //required: true,
    maxlength: 22,
},
salt: String,

},
{timestamps: true}
)

dbSchema.virtual("password")
.set(function (password){this.hashedPassword = password, this.salt = "llkasdmge3", this.hashedPassword = this.encryptFun(password)})
.get(function (){return this.hashedPassword})

dbSchema.methods = {encryptFun: function (password){
    if (!password) return console.log("Error! No password");
    try { 
        return crypto.createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');

    }
    catch {
        (err)=>console.log(err)    
    }
}}

module.exports = mongoDB.model("userSchema", dbSchema);