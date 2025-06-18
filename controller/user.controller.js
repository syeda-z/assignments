const User = require("../models/data.model")

exports.saveUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res.status(201).send("Form submitted and saved!");
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
//saves details

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
//gets all details