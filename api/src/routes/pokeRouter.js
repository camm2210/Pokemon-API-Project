const { Router } = require("express");
const {
  getPokeHandler,
  getPokesHandler,
  createPokeHandler,
} = require("../handlers/pokeHandlers");

const pokeRouter = Router();

pokeRouter.get("/", getPokeHandler);

pokeRouter.get("/:id", getPokesHandler);

pokeRouter.post("/", createPokeHandler);

module.exports = pokeRouter;
