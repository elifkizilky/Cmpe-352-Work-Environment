const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //gerekli
        trim: true //başındaki ve sonundaki boşlukları al, max length falan da verilebilir
    },

    email: {
        type: String,
        required: true, //gerekli
        unique: true

    },
    password: {
        type: String,
        required: true, //gerekli
    },
    date: {
        type: Date,
        default: new Date() //şimdiki zaman
    }
})

module.exports = mongoose.model('auth', AuthSchema)