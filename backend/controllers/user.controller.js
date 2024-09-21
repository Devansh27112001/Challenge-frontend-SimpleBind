import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res
      .status(200)
      .json({ status: "success", message: "Get all users", users });
  } catch (error) {
    console.log("Error in userController:getAllUsers", error);
    res.status(400).json({ status: "fail", message: error });
  }
};

export const createUser = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const user = await User.create({
      firstName,
      lastName,
    });
    res.status(200).json({ status: "success", message: "Create user", user });
  } catch (error) {
    console.log("Error in userController:createUser", error.message);
    res.status(400).json({ status: "fail", message: error });
  }
};
