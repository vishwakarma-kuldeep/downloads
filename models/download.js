const mongoose = require("mongoose");

const downloadSchema = new mongoose.Schema({
    data:{
        type:String,
        trim:true
    },
    downloadTimes:{
        type:Number,
        default:1
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    deletedAt:{
        type:Date,
        default:null
    }
}, { timestamps: true });

module.exports = mongoose.model("Download", downloadSchema);
      

