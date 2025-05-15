const users = [];

let indexId = 1;

const getUsers = async () => {
  return await users;
};

const getUserById = async (id) => {
  return await users.find((user) => user.id === id);
};

const postUser = async (user) => {
  const newUser = { id: indexId++, ...user };
  users.push(newUser);
  return newUser;
};

const patchUser = async (id, user) => {
  const index = users.findIndex((e) => e.id == id);
  if (index === -1) {
    return null;
  }
  const newUser = { ...users[index], ...user };
  users.splice(index, 1, newUser);
  return newUser;
};

const deleteUser = async (id) => {
  const index = users.findIndex((e) => e.id == id);
  if (index == -1) {
    return index;
  }

  users.splice(index, 1);
  return index;
};

export default {
  getUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser,
};
