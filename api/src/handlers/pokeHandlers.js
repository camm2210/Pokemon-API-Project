const {
  createPoke,
  getPokesById,
  getAllPokes,
  getApiPokes,
} = require("../controllers/pokeController");

const getPokeHandler = async (req, res) => {
  const { name } = req.query;
  const allPokes = await getApiPokes();
  return allPokes;
};
//   try {
//     if (name) {
//       let pokemon = allPokes.filter((element) => element.name === name);
//       poke.length
//         ? res.status(200).send(pokemon)
//         : res.status(404).send("pokemon not found");
//     } else {
//       let pokemons = await getAllPokes();
//       res.status(200).send(pokemons);
//     }
//     res.status(200).json(allPokes);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// };

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
