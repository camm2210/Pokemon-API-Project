const { Router } = require("express");

const pokeRouter = Router();

pokeRouter.get("/");

pokeRouter.get("/:id");

pokeRouter.post("/");

module.exports = pokeRouter;
