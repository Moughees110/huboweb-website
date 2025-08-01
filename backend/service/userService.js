const { get } = require("mongoose");
const User = require("../model/user");

const loginUser = async function( email,password){
    try{
        const user = await User.findOne({ email: email, password: password });
        if(user){
            return user;
        }
        else{
            throw new Error("Error logging in user:", error);
        }
    }catch(error){
        console.error("Error logging in user:", error);
        throw new Error("Login failed");
    }
}

const registerUser = async function( email, password, isActive){
    try{
        const newUser = new User({ email, password, isActive });
        await newUser.save();
        return newUser;
    }catch(error){
        console.error("Error registering user:", error);
        throw new Error("Registration failed");
    }
}

const getAllUsers = async function() {
    try{
        const users = await User.find({});
        return users;
    }catch(error){
        console.error("Error fetching users:", error);
    }
}

const getUserByEmail = async function(email) {
    try{
        const user = await User.find({email: email});
        return user;
    }catch(error){
        console.error("Error fetching user by email:", error);
        throw new Error("User not found");
    }
}

const updateUser = async function(userId, updateData) {
    try{
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
        return updatedUser;
    }catch(error){
        console.error("Error updating user:", error);
        throw new Error("User update failed");
    }
}

const deleteUser = async function(userId) {
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    }catch(error){
        console.error("Error deleting user:", error);
        throw new Error("User deletion failed");
    }
}

module.exports = {
    loginUser,
    registerUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser
};