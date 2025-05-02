const mongoose = require('mongoose');

const PostSkima = new mongoose.Schema( {
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('post',PostSkima);