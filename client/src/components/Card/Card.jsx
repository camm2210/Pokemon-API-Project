import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const imgTypes = require.context("../../images/types");

const Card = (props) => {
  return (
    <NavLink className={style.none} to="/pokemon/:id">
      <div className={style.card}>
        <img src={props.image} alt="" />
        <h1> {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h1>
        <div className={style.types}>
          {props.types?.map((element) => {
            return (
              <div className={style.types}>
                <img
                  className={style.typesImg}
                  src={imgTypes(`./${element.name}.png`)}
                  alt={element.name}
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
