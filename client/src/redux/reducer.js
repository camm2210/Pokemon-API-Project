import {
  GET_POKES,
  GET_TYPES,
  FILTER_BY_TYPE,
  GET_POKEMON_NAME,
  GET_POKE_ID,
  FILTER_BY_CREATED,
  ORDER,
  CLEAN_DETAIL,
  CLEAN_POKEMONS,
} from "./actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  pokeId: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case "POST_POKEMON":
      return {
        ...state,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        pokeId: action.payload,
      };

    case ORDER:
      const sorted =
        action.payload === "asc"
          ? [...state.pokemons].sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : action.payload === "desc"
          ? [...state.pokemons].sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : action.payload === "ascAttack"
          ? [...state.pokemons].sort((a, b) => b.attack - a.attack)
          : action.payload === "descAttack"
          ? [...state.pokemons].sort((a, b) => a.attack - b.attack)
          : action.payload === "normal"
          ? [...state.allPokemons]
          : [...state.allPokemons];

      return {
        ...state,
        pokemons: sorted,
      };

    case FILTER_BY_CREATED:
      let copy = state.allPokemons;
      let createdFiltered;
      if (action.payload === "db") {
        createdFiltered = copy.filter((pokemon) => pokemon.created);
      } else if (action.payload === "api") {
        createdFiltered = copy.filter((pokemon) => !pokemon.created);
      } else {
        createdFiltered = copy;
      }
      return {
        ...state,
        pokemons: createdFiltered,
      };

    case GET_POKE_ID:
      return { ...state, pokeId: action.payload };

    case GET_POKEMON_NAME:
      return { ...state, pokemons: action.payload };

    case FILTER_BY_TYPE:
      const pokemons = state.pokemons;

      const pokesFiltered =
        action.payload === "All"
          ? state.allPokemons
          : pokemons.filter((pokemon) =>
              pokemon.types.some((type) => type.name === action.payload)
            );
      return { ...state, pokemons: pokesFiltered };

    case GET_TYPES:
      return { ...state, types: action.payload };

    case GET_POKES:
      return {
        ...state,
        allPokemons: action.payload,
        pokemons: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
