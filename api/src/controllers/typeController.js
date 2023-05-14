const { Pokemon } = require("../db");
const axios = require("axios");

const getPokeApi = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  const types = data.results.map((element) => element.name);
  console.log(types);
};

module.exports = { getPokeApi };
