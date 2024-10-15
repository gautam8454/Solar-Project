const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Solar',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const contactSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,

    fname: {
        type: String
    },

    lname: {
        type: String
    },

    email: {
        type: String
    },

    phone: {
        type: Number
    },

    password: {
        type: String
    },

    cpassword: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now()
    }
})

const login = mongoose.model('login', contactSchema);

module.exports = login;