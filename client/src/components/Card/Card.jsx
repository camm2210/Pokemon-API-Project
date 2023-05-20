import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>Name = {props.name}</p>
      <p>Image = {props.image} </p>
      <p>Types = [props.types]</p>
    </div>
  );
};

export default Card;
