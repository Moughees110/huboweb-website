const userService = require("../service/userService");
const express = require("express");

exports.userLogin = async (req, res) => {
    const { email, password}= req.body;
    try{
        const user = await userService.loginUser(email, password);
        if(user){
            return res.status(200).json({message: "login successfully done",user});
        }
        else{
            return res.status(400).json({message: "Invalid email or password"});
        }
    }catch(error){
        return res.status(500).json({message: "Internal server error"});
    }
};
exports.userLogout = async (req, res) => {
    const { userId } = req.body;
    try {
        await userService.deleteUserToken(userId);
        return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.userRegister = async (req, res)=>{
    const {email,password,isActive}= req.body;
    try{
        const user = await userService.registerUser(email, password, isActive);
        return res.status(201).json({message: "User registered successfully", user});
    }catch(error){
        return res.status(500).json({message: "Internal server error"});
    }
}
exports.getAllUsers = async (req, res) => {
    try{
        const users = await userService.getAllUsers();
        return res.status(200).json({message: "Users fetched successfully", users});
    }catch(error){
        return res.status(500).json({message: "Internal server error"});
    }
}
exports.getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try{
        const user = await userService.getUserByEmail(email);
        return res.status(200).json({message: "User fetched successfully", user});
    }catch(error){
        return res.status(404).json({message: "User not found"});
    }
}
exports.updateUser = async (req, res) => {
    const {userId} = req.params;
    const updateData = req.body;
    try{
        const updatedUser = await userService.updateUser(userId, updateData);
        return res.status(200).json({message: "User updated successfully", updatedUser});
    }catch(error){
        return res.status(500).json({message: "Internal server error"});
    }
}

exports.deleteUser = async (req, res) => {
    const { userId } = req.params;
    try{
        await userService.deleteUser(userId);
        return res.status(200).json({message: "User deleted successfully"});
    }catch(error){
        return res.status(500).json({message: "Internal server error"});
    }
}