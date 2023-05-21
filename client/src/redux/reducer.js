import { GET_POKES, GET_POKE } from "./actions";

const initialState = {
  pokemons: [],
  pokemon: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKE:
      return { ...state, pokemon: action.payload };
    case GET_POKES:
      return { ...state, pokemons: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
