// controllers/wisataController.js
const Wisata = require('../models/wisatamodel');

exports.getAll = async (req, res) => {
  const wisata = await Wisata.getAll();
  res.json(wisata);
};

exports.create = async (req, res) => {
  const newWisata = await Wisata.create(req.body);
  res.json(newWisata);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedWisata = await Wisata.update(id, req.body);
  res.json(updatedWisata);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Wisata.delete(id);
  res.status(204).send();
};
