// controllers/userController.js
import { User } from '../database/models.js';

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const updateUser = async (req, res) => {
  const user = await User.update(req.body, { where: { id: req.params.id } });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: 'User deleted' });
};