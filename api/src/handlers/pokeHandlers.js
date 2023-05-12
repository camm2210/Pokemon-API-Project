const getPokeHandler = (req, res) => {
  res.send("NIY: está ruta trae la info de los pokemons");
};

const getPokeById = (req, res) => {
  const { id } = req.params;
  res.send(`NIY: esta ruta trae el detalle del pokemon con ID ${id}`);
};

const createPoke = (req, res) => {
  res.send("NIY: esta ruta postea un pokemon en la DB");
};

module.exports = {
  getPokeHandler,
  getPokeById,
  createPoke,
};
