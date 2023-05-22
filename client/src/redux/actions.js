import axios from "axios";

export const GET_POKES = "GET_POKES";
export const GET_POKE = "GET_POKE";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";

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
    var info = await axios.get("http://localhost:3001/types", {});
    console.log(info.data);

    return dispatch({
      type: GET_TYPES,
      payload: info.data,
    });
  };
}

export function filterByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}
