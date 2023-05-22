import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokes } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokes());
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getPokes());
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
          <select>
            <option value="nor"> Normal </option>
            <option value="asc"> A - Z </option>
            <option value="desc"> Z - A</option>
            <option value="asc"> Higher Attack </option>
            <option value="desc"> Lower Attack </option>
          </select>
        </div>
        <div>
          <select>
            <option value="api"> All Pokemons </option>
            <option value="api"> Pokedex </option>
            <option value="db"> Created </option>
          </select>
        </div>
        <div>
          <select>
            <option value="api"> All Types </option>
            <option value="bug"> Bug </option>
            <option value="dark"> Dark </option>
            <option value="dragon"> Dragon </option>
            <option value="electric"> Electric </option>
            <option value="fairy"> Fairy </option>
            <option value="fighting"> Fighting </option>
            <option value="fire"> Fire </option>
            <option value="flying"> Flying </option>
            <option value="ghost"> Ghost </option>
            <option value="grass"> Grass </option>
            <option value="ground"> Ground </option>
            <option value="ice"> Ice </option>
            <option value="normal"> Normal </option>
            <option value="poison"> Poison </option>
            <option value="psychic"> Psychic </option>
            <option value="rock"> Rock</option>
            <option value="shadow"> Shadow </option>
            <option value="steel"> Steel </option>
            <option value="unkknown"> Unknown </option>
            <option value="water"> Water </option>
          </select>
        </div>
      </div>
      <CardsContainer />
    </div>
  );
};

export default Home;
