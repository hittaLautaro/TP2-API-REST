import userModel from "../models/user.model.js";

const getUsers = async () => {
  const data = await userModel.getUsers();
  return data;
};

const getUserById = async (id) => {
  const data = await userModel.getUserById(id);
  return data;
};

const postUser = async (user) => {
  const data = await userModel.postUser(user);
  return data;
};

const patchUser = async (id, user) => {
  const data = await userModel.patchUser(id, user);
  return data;
};

const deleteUser = async (id) => {
  const data = await userModel.deleteUser(id);
  return data;
};

export default {
  getUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser,
};
