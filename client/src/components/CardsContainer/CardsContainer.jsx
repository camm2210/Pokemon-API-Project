import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ currentPokemons }) => {
  return (
    <div className={style.container}>
      {currentPokemons.map((pokemon) => {
        return (
          <div className={style.cards}>
            <Card
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
