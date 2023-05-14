const {
  createPoke,
  getPokesById,
  getAllPokes,
} = require("../controllers/pokeController");

const getPokeHandler = async (req, res) => {
  const { name } = req.query;
  // name
  //   ? res.send(`todos los pokemons con nombre ${name}`)
  //   : res.send("todos los pokemons");
  try {
    const allPokes = await getAllPokes();
    res.status(200).json(allPokes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//* qué id?
//* id de algo que no está en db o en API

const getPokesHandler = async (req, res) => {
  const { id } = req.params;
  const src = isNaN(id) ? "DB" : "API";
  try {
    const poke = await getPokesById(id, src);
    res.status(200).json(poke);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPokeHandler = async (req, res) => {
  const { name, image, hp, attack, defense, types, speed, height, weight } =
    req.body;
  try {
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
    res.status(201).json({ newPoke });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokeHandler,
  getPokesHandler,
  createPokeHandler,
};
