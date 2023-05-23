import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokes,
  filterByType,
  getTypes,
  createdBy,
  sortByName,
} from "../../redux/actions";
import style from "./Home.module.css";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);

  //! paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, _setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokes());
    dispatch(getTypes());
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getPokes());
  };

  const handleFilterType = (event) => {
    dispatch(filterByType(event.target.value));
  };

  const handleFilterCreated = (event) => {
    dispatch(createdBy(event.target.value));
  };

  const handleSortByName = (event) => {
    dispatch(sortByName(event.target.value));
  };

  return (
    <div>
      <button
        className={style.reloadButton}
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Reload Pokemons
      </button>
      <div className={style.filters}>
        <div>
          <select onChange={(event) => handleSortByName(event)}>
            <option value="asc" onChange={(event) => handleSortByName(event)}>
              A - Z
            </option>
            <option value="desc" onChange={(event) => handleSortByName(event)}>
              Z - A
            </option>

            <option value="asc"> Higher Attack </option>
            <option value="desc"> Lower Attack </option>
          </select>
        </div>
        <div>
          <select onChange={(event) => handleFilterCreated(event)}>
            <option value="All"> All Pokemons </option>
            <option value="api"> Pokedex </option>
            <option value="db"> Created </option>
          </select>
        </div>
        <div>
          <select onChange={(event) => handleFilterType(event)}>
            <option value="All"> All Types </option>
            {types.map((type, key) => (
              <option value={type} key={key}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        paginado={paginado}
        page={currentPage}
      />
      <CardsContainer currentPokemons={currentPokemons} />
    </div>
  );
};

export default Home;
