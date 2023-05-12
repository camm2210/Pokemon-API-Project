const { createPoke } = require("../controllers/pokeController");

const getPokeHandler = (req, res) => {
  const { name } = req.query;
  name
    ? res.send(`todos los pokemons con nombre ${name}`)
    : res.send("todos los pokemons");
};

const getPokesHandler = (req, res) => {
  const { id } = req.params;
  res.send(`NIY: esta ruta trae el detalle del pokemon con ID ${id}`);
};

const createPokeHandler = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, types, speed, height, weight } =
      req.body;
    const newPoke = await createPoke(
      name,
      image,
      hp,
      attack,
      defense,
      types,
      speed,
      height,
      weight
    );
    res.status(201).json(newPoke);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokeHandler,
  getPokesHandler,
  createPokeHandler,
};
