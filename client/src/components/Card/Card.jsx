import style from "./Card.module.css";
import { Link } from "react-router-dom";
import sword from "../../images/cards/sword.png";

const imgTypes = require.context("../../images/types");

const Card = (props) => {
  console.log(props);
  return (
    <Link className={style.none} to={`/pokemon/${props.id}`}>
      <div className={style.card}>
        <div className={style.attack}>
          <img src={sword} alt="x" height="15px" /> = {props.attack}
        </div>
        <h1 className={style.name}>
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </h1>
        <img
          className={style.img}
          src={props.image}
          alt=""
          width="200px"
          height="250vh"
        />

        <span className={style.typesText}>Types</span>
        <div className={style.types}>
          {props.types?.map((element, key) => {
            return (
              <div className={style.types} key={key}>
                <img
                  className={style.typesImg}
                  src={imgTypes(`./${element.name}.png`)}
                  alt={element.name}
                  height="70px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Card;
