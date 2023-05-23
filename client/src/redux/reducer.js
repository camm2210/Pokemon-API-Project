import {
  GET_POKES,
  GET_POKE,
  GET_TYPES,
  FILTER_BY_TYPE,
  GET_POKEMON_NAME,
  GET_POKE_ID,
} from "./actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  pokeId: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
      console.log(pokesFiltered);
      console.log(action.payload);
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
