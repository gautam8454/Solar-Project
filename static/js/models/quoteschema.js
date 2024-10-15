const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Solar',
 {useNewUrlParser: true, useUnifiedTopology: true}
 );

 const contactmainSchema = new mongoose.Schema({
    Name: {
        type: String,
        require:true
    },

    Email: {
        type: String,
        require:true
    },

    Phone: {
        type: Number,
        require:true
    },  

    Message: {
        type: String,
        require:true
    }, 

    Check1: {
        type: String,
        checked: true
    }, 

    Check2: {
        type: String,
        checked: true
    }, 

    Check3: {
        type: String,
        checked: true
    }  
})

const quote = mongoose.model('quote', contactmainSchema);

module.exports = quote;