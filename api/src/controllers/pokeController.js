const { Pokemon, Type } = require("../db");
const { getApiPokes } = require("../controllers/getApiController");
const axios = require("axios");

const getDbPokes = async () => {
  const dbPokes = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  console.log("db pokes obtained");
  return dbPokes;
};

const getAllPokes = async () => {
  const dbdata = await getDbPokes();
  const apidata = await getApiPokes();
  const allPokes = dbdata.concat(apidata);
  return allPokes;
};

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

module.exports = {
  createPoke,
  getPokesById,
  getAllPokes,
  getDbPokes,
};
