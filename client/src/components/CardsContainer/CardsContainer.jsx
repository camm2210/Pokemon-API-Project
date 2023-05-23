import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ currentPokemons }) => {
  return (
    <div className={style.container}>
      {currentPokemons?.map((pokemon, key) => {
        return (
          <div className={style.cards} key={key}>
            <Card
              id={pokemon.id}
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
