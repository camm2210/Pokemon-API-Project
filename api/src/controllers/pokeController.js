const { Pokemon } = require("../db");
const axios = require("axios");

const getApiPokes = async () => {
  const data = await axios.get("https://pokeapi.co/api/v2/pokemon");
  //console.log(data.data);
  const apiPokes = data.data.results;
  console.log(apiPokes);
};

const getDbPokes = async () => {};

const getAllPokes = async () => {};

const getPokesById = async (id, src) => {
  const poke =
    src === "API"
      ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
      : await Pokemon.findByPk(id);
  return poke;
};

const createPoke = async (
  name,
  image,
  hp,
  attack,
  defense,
  types,
  speed,
  height,
  weight
) => {
  await Pokemon.create({
    name,
    image,
    hp,
    attack,
    defense,
    types,
    speed,
    height,
    weight,
  });
};

module.exports = { createPoke, getPokesById, getAllPokes, getApiPokes };
