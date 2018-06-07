var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a Schema
var userSchema = new Schema({
    name: String,
    username: {type: String, requires: true, unique: true},
    password: { type: String, required: true},
    position: String,
    created_at: Date,
    modified_at: Date
});


//Create a model for the user
var User = mongoose.model('User', userSchema);

//Make this available for use
module.exports = User;
