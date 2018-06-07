var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a Schema
var userSchema = new Schema({
    name: String,
    salutation: String,
    gender: {type: String, enum: ['male', 'female'], default: 'male'},
    username: {type: String, requires: true, unique: true},
    password: { type: String, required: true},
    position: String,
    maritalStatus: {type: String, enum: ['single', 'married'], default: 'single'},
    created_at: Date,
    modified_at: Date
});

//custom method for schema
userSchema.methods.salute = function () {
    if(this.gender === 'male'){
        return 'Mr.'
    }else{
        return (this.maritalStatus === 'single' ? 'Miss' : 'Mrs.');
    }
};

//Create a model for the user
var User = mongoose.model('User', userSchema);

//Make this available for use
module.exports = User;
