const { Type } = require("../db");
const axios = require("axios");

const getTypeApi = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  const types = data.results.map((element) => element.name);
  for (let element of types) {
    await Type.findOrCreate({
      where: { name: element },
    });
  }
  console.log("DB charged with types");
};

const getTypeDb = async () => {
  const pokeTypes = await Type.findAll();
  const types = pokeTypes.map((element) => element.name);
  return types;
};

module.exports = {
  getTypeApi,
  getTypeDb,
};
