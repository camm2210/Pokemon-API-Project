import axios from "axios";

export const GET_POKES = "GET_POKES";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const GET_POKE_ID = "GET_POKE_ID";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const ORDER = "ORDER";

export const getPokes = () => {
  return async (dispatch) => {
    const pokeData = await axios.get("http://localhost:3001/pokemons/");

    const pokemons = pokeData.data;
    return dispatch({ type: GET_POKES, payload: pokemons });
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    const info = await axios.get("http://localhost:3001/types");

    return dispatch({
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
      error({ error: error.message });
    }
  };
}

export function getPokeById(id) {
  return async (dispatch) => {
    const info = await axios.get(`http://localhost:3001/pokemons/${id}`);
    return dispatch({
      type: GET_POKE_ID,
      payload: info.data,
    });
  };
}

export function createdBy(payload) {
  return {
    type: FILTER_BY_CREATED,
    payload,
  };
}

export function sort(payload) {
  return {
    type: ORDER,
    payload,
  };
}
