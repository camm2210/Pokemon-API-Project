import axios from "axios";

export const GET_POKES = "GET_POKES";
export const GET_POKE = "GET_POKE";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";

export const getPokes = () => {
  return async (dispatch) => {
    const pokeData = await axios.get("http://localhost:3001/pokemons/");

    const pokemons = pokeData.data;
    dispatch({ type: GET_POKES, payload: pokemons });
  };
};

export const getPoke = (id) => {
  return async (dispatch) => {
    const poke = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const pokeId = poke.data;

    dispatch({ type: GET_POKE, payload: pokeId });
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    const info = await axios.get("http://localhost:3001/types");
    dispatch({
      type: GET_TYPES,
      payload: info.data,
    });
  };
};

export function filterByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}

export function getPokeByName(name) {
  return async (dispatch) => {
    try {
      const pokeName = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: pokeName.data,
      });
    } catch (error) {
      alert("Pokemon not found");
      window.location.href = "http://localhost:3000/home";
    }
  };
}

export function getPokeById(id) {
  return async (dispatch) => {
    const info = await axios.get();
  };
}
