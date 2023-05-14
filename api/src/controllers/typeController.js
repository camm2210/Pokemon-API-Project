const { Type } = require("../db");
const axios = require("axios");

const getTypeApi = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type");
    const types = data.results.map((element) => element.name);
    for (let element of types) {
      await Type.findOrCreate({
        where: { name: element },
      });
    }
    console.log("DB charged with types");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTypeDb = async () => {
  const pokeTypes = await Type.findAll({
    Attributes: ["name"],
  });
  const types = pokeTypes.map((element) => element.name);
  return types;
};

module.exports = {
  getTypeApi,
  getTypeDb,
};
