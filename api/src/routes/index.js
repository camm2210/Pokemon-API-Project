const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/pokemons", (req, res) => {
  res.send("Todos los pokemons");
});

router.get("/pokemons/name?=pokemon", (req, res) => {
  res.send("pokemons por nombre en query");
});

router.get("/pokemons/:idPokemons", (req, res) => {
  res.send("pokemons por id");
});

router.post("/pokemons", (req, res) => {
  res.send("crear un pokemon");
});

router.get("/types", (req, res) => {
  res.send("obtener tipos de pokemon");
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
