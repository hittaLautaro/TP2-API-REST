import userService from "../services/user.service.js";

const allUsers = async (req, res) => {
  const data = await userService.getUsers();
  res.status(200).send(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(Number(id));

  if (!user) {
    return res.status(404).send("User with id (" + id + ") was not found");
  }

  res.status(200).send(user);
};

const postUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = { name, email, age };
  await userService.postUser(newUser);
  res.status(201).send(newUser);
};

const patchUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const newUser = await userService.patchUser(Number(id), user);

  if (!newUser) {
    return res.status(404).send("User not found");
  }

  res.status(200).send(newUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const index = await userService.deleteUser(Number(id));

  if (index == -1) {
    return res.status(404).send("User not found");
  }

  res.status(200).send("User deleted");
};

export default {
  allUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser,
};
