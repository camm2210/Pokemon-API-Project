import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokeById, cleanDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import image from "../../images/loading.gif";

const imgTypes = require.context("../../images/types");

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokeById(id));
    return () => {
      dispatch(cleanDetail(dispatch));
    };
  }, []);

  const myPokemon = useSelector((state) => state.pokeId);

  return (
    <div>
      {myPokemon.length === 0 ? (
        <div className={style.loader}>
          <img src={image} alt="Loading" />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.back}>
            <Link to="/home">
              <button className={style.button}>All Pokemons</button>
            </Link>
          </div>
          <div className={style.card}>
            <div className={style.name}>
              {myPokemon[0].name.charAt(0).toUpperCase() +
                myPokemon[0].name.slice(1)}
            </div>
            <p className={style.id}>pokeDex #{myPokemon[0].id}</p>
            <img
              src={myPokemon[0].image}
              alt="img not found"
              className={style.pokeImg}
            />
            <div className={style.types}>
              {myPokemon[0].types?.map((element, k) => {
                return (
                  <div className={style.types} key={k}>
                    <img
                      className={style.typesImg}
                      src={imgTypes(`./${element.name}.png`)}
                      alt="Image not fount"
                    />
                  </div>
                );
              })}
            </div>
            <div className={style.statsCont}>
              <div className={style.stats1}>
                <h5 className={style.stats}>HP: {myPokemon[0].hp}</h5>
                <h5 className={style.stats}>Attack: {myPokemon[0].attack}</h5>
                <h5 className={style.stats}>Defense: {myPokemon[0].defense}</h5>
              </div>
              <div className={style.stats2}>
                <h5 className={style.stats}>Speed: {myPokemon[0].speed}</h5>
                <h5 className={style.stats}>Height: {myPokemon[0].height}</h5>
                <h5 className={style.stats}>Weight: {myPokemon[0].weight}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
