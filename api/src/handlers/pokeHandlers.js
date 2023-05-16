const { createPoke, getAllPokes } = require("../controllers/pokeController");
const { Type } = require("../db");

const getPokeHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const allPokes = await getAllPokes();
    if (name) {
      let pokemon = allPokes.filter(
        (element) => element.name.toUpperCase() === name.toUpperCase()
      );
      if (pokemon.length) res.send(pokemon);
      else {
        res.send("pokemon not found");
      }
    } else {
      let pokemons = allPokes;
      return res.status(200).json(pokemons);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getPokesHandler = async (req, res) => {
  const { id } = req.params;
  const allPokesId = await getAllPokes();
  try {
    if (id) {
      let pokemonById = allPokesId.filter((e) => e.id == id);
      pokemonById.length
        ? res.status(200).send(pokemonById)
        : res.status(404).send("Pokemon not found");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createPokeHandler = async (req, res) => {
  const { name, image, hp, attack, defense, types, speed, height, weight } =
    req.body;
  try {
    if (name) {
      const allPoke = await getAllPokes();
      const isPoke = allPoke.find(
        (e) => e.name.toLowerCase() === name.toLowerCase()
      );
      if (!isPoke) {
        const newPoke = await createPoke(
          name,
          image,
          hp,
          attack,
          defense,
          speed,
          height,
          weight
        );
        const typeDb = await Type.findAll({
          where: {
            name: types,
          },
        });
        newPoke.addType(typeDb);
        return res.status(201).send(newPoke);
      }
      if (isPoke) return res.status(400).send("Pokemon name already exist");
    }
    if (!name) return res.status(404).send("Pokemon name is required");
    //
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  getPokeHandler,
  getPokesHandler,
  createPokeHandler,
};
