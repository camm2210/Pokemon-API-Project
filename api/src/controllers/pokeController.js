const { Pokemon, Type } = require("../db");

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
  } while (API !== null && allPokes.length < 120);
  //return allPokes;
  let pokesData = await Promise.all(
    allPokes.map(async (element) => {
      let poke = await axios.get(element.url);
      return {
        id: poke.data.id,
        name: poke.data.name,
        image: poke.data.sprites.other.dream_world.front_default,
        hp: poke.data.stats[0].base_stat,
        attack: poke.data.stats[1].base_stat,
        defense: poke.data.stats[2].base_stat,
        speed: poke.data.stats[5].base_stat,
        height: poke.data.height,
        weight: poke.data.weight,
        types: poke.data.types.map((element) => {
          return {
            name: element.type.name,
          };
        }),
      };
    })
  );
  console.log("API pokes obtained");
  return pokesData;
};

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
  console.log("DB pokes obtained");
  return dbPokes;
};

const getAllPokes = async () => {
  const dbdata = await getDbPokes();
  const apidata = await getApiPokes();
  const allPokes = dbdata.concat(apidata);
  return allPokes;
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
  getAllPokes,
  getApiPokes,
};
