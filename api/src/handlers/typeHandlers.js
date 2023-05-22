const { getTypeDb } = require("../controllers/typeController");

const getPokeType = async (req, res) => {
  try {
    const pokeType = await getTypeDb();
    return res.status(200).json(pokeType);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

module.exports = getPokeType;
