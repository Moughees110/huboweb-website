const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    isActive: {
      type: Boolean,
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('users', userSchema, 'users'); // 'users' is the collection name in MongoDB