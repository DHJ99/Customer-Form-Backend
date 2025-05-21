const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShema = new Schema ({
    id:Number,
    name:String
});

const User = mongoose.model('User' , userShema);

module.exports = User;