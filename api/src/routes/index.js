const { Router } = require("express");
const pokeRouter = require("./pokeRouter");
const typeRouter = require("./typeRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/types", typeRouter);
router.use("/pokemons", pokeRouter);

module.exports = router;
