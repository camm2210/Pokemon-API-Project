import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div className={style.container}>
      {pokemons.map((pokemon) => {
        return (
          <Card
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            hp={pokemon.hp}
            defense={pokemon.defense}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
