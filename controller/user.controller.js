const { get } = require("mongoose");
const User = require("../models/data.model")

const saveUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res.status(201).send("Form submitted and saved!");
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
//saves details

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

const getOneUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

const updateUser = async (req,res) => {
  try {
    const { id } = req.params;
    const users = await User.findByIdAndUpdate(id,req.body);
    if (!users){
      return res.status(404).json({ message: "user not found" });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req,res) => {
  try {
    const { id }= req.params;
    const users = await User.findByIdAndDelete(id);
    if (!users) {
      return res.status(404).json({ message: "user not found" });
    } 
    res.status(200).json({ message: "user data successfully deleted"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  saveUser,
  getAllUsers,
  updateUser,
  getOneUsers,
  deleteUser,
}
//gets all details