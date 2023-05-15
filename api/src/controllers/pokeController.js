const { Pokemon } = require("../db");
const axios = require("axios");

const getApiPokes = async () => {
  let allPokes = [];
  let API = "https://pokeapi.co/api/v2/pokemon";
  do {
    let info = await axios.get(API);
    let apiPokes = info.data;
    let auxPokes = apiPokes.results.map((e) => {
      return {
        name: e.name,
        url: e.url,
      };
    });
    allPokes.push(...auxPokes);
    API = apiPokes.next;
  } while (API !== null);
  return allPokes;
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
  const newPoke = await Pokemon.create({
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
  return newPoke;
};

module.exports = { createPoke, getPokesById, getAllPokes, getApiPokes };
