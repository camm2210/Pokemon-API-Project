import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>ID = {props.id}</p>
      <p>Name = {props.name}</p>
      <p>Image = {props.image} </p>
      <p>HP = {props.hp}</p>
      <p>Defense = {props.defense}</p>
    </div>
  );
};

export default Card;
