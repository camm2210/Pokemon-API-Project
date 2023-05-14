const { getPokeApi } = require("../controllers/typeController");

const getPokeType = async (req, res) => {
  const getTypes = await getPokeApi();

  res.send(console.log(getTypes));
};

module.exports = getPokeType;
