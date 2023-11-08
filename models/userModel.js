const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        unique:true,
        required:true,
        // validate: {
        //     validator: function(value) {
        //       return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
        //     },
        //     message: 'Invalid email address format'
        //   },
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        // validate: {
        //     validator: function(value) {
        //       return /^[0-9]{10}$/.test(value);
        //     },
        //     message: 'Invalid mobile number format'
        //   },
    },
    address:{
        type: String
    },
    company:{
        type: String
    },
    error:{
        type: String
    }
},{underscored:true,timestamps:false});

module.exports = mongoose.model('User',userSchema)