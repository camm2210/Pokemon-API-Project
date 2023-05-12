const getPokeHandler = (req, res) => {
  const { name } = req.query;
  name
    ? res.send(`todos los pokemons con nombre ${name}`)
    : res.send("todos los pokemons");
};

const getPokeById = (req, res) => {
  const { id } = req.params;
  res.send(`NIY: esta ruta trae el detalle del pokemon con ID ${id}`);
};

const createPoke = (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, img, types } =
    req.body;
  res.send(`posteando el pokemon ${name}`);
};

module.exports = {
  getPokeHandler,
  getPokeById,
  createPoke,
};
