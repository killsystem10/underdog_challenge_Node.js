const mongoose = require('mongoose');

const contactSkima = new moogose.Schema({
    name: {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: [true, "전화번호를 입력하여 주십시오"]
    }
},
    {
        timestamps: true
    })
const Contact = mongoose.model(['contact',contactSkima]);
model.exports = Contact;