import { GET_POKES, GET_POKE, GET_TYPES, FILTER_BY_TYPE } from "./actions";

const initialState = {
  pokemons: [],
  pokemon: [],
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TYPE:
      const pokemons = state.pokemons;
      const pokesFiltered =
        action.payload === "All"
          ? pokemons
          : pokemons.filter((el) => el.types.includes(action.payload));
      return { ...state, pokemons: pokesFiltered };

    case GET_TYPES:
      return { ...state, types: action.payload };

    case GET_POKE:
      return { ...state, pokemon: action.payload };

    case GET_POKES:
      return { ...state, pokemons: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
