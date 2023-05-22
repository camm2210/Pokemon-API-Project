import axios from "axios";

export const GET_POKES = "GET_POKES";
export const GET_POKE = "GET_POKE";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";

export const getPokes = () => {
  return async function (dispatch) {
    const pokeData = await axios.get("http://localhost:3001/pokemons/");

    const pokemons = pokeData.data;
    dispatch({ type: GET_POKES, payload: pokemons });
  };
};

export const getPoke = (id) => {
  return async function (dispatch) {
    const poke = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const pokeId = poke.data;

    dispatch({ type: GET_POKE, payload: pokeId });
  };
};

export function getTypes() {
  return async function (dispatch) {
    const info = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: GET_TYPES,
      payload: info.data,
    });
  };
}
