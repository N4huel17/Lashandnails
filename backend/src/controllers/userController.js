// controllers/userController.js
const { User } = require('../database/models');

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

const updateUser = async (req, res) => {
  const user = await User.update(req.body, { where: { id: req.params.id } });
  res.json(user);
};

const deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: 'User deleted' });
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
