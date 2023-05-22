import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const imgTypes = require.context("../../images/types");

const Card = (props) => {
  return (
    <NavLink className={style.none} to="/pokemon/:id">
      <div className={style.card}>
        <img
          className={style.img}
          src={props.image}
          alt=""
          width="200px"
          height="250vh"
        />

        <span className={style.typesText}>Types</span>

        <h1 className={style.name}>
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </h1>
        <div className={style.types}>
          {props.types?.map((element) => {
            return (
              <div className={style.types}>
                <img
                  className={style.typesImg}
                  src={imgTypes(`./${element.name}.png`)}
                  alt={element.name}
                  height="65px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
