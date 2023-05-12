const { Router } = require("express");
const getPokeType = require("../handlers/typeHandlers");

const typeRouter = Router();

typeRouter.get("/", getPokeType);

module.exports = typeRouter;
