const { getTypeDb } = require("../controllers/typeController");

const getPokeType = async (req, res) => {
  try {
    const pokeType = getTypeDb();
    res.status(200).json({ pokeType });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getPokeType;
