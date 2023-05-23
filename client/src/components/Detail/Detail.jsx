import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokeById } from "../../redux/actions";
import style from "./Detail.module.css";
import image from "../../images/loading.gif";

const imgTypes = require.context("../../images/types");

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokeById(id));
  }, []);

  const myPokemon = useSelector((state) => state.pokeId);

  return (
    <div>
      {myPokemon.length === 0 ? (
        <div>
          <img src={image} alt="Loading" />
        </div>
      ) : (
        <div>
          <div>
            <h1>
              {myPokemon[0].name.charAt(0).toUpperCase() +
                myPokemon[0].name.slice(1)}
            </h1>
            <p>#{myPokemon[0].id}</p>
            <img
              src={myPokemon[0].image}
              alt="img not found"
              height="250px"
              width="200px"
            />
            <div>
              <h3>
                {myPokemon[0].types?.map((element, k) => {
                  return (
                    <div key={k}>
                      <img src={imgTypes(`./${element.name}.png`)} alt="x" />
                    </div>
                  );
                })}
              </h3>
            </div>
            <h5>HP: {myPokemon[0].hp}</h5>
            <h5>Attack: {myPokemon[0].attack}</h5>
            <h5>Defense: {myPokemon[0].defense}</h5>
            <h5>Speed: {myPokemon[0].speed}</h5>
            <h5>Height: {myPokemon[0].height}</h5>
            <h5>Weight: {myPokemon[0].weight}</h5>
          </div>
        </div>
      )}
      <div>
        <Link to="/home">
          <button>All Pokemons</button>
        </Link>
      </div>
    </div>
  );
};
export default Detail;
