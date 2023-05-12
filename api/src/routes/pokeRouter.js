const { Router } = require("express");
const {
  getPokeHandler,
  getPokeById,
  createPoke,
} = require("../handlers/pokeHandlers");

const pokeRouter = Router();

pokeRouter.get("/", getPokeHandler);

pokeRouter.get("/:id", getPokeById);

pokeRouter.post("/", createPoke);

module.exports = pokeRouter;
