import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const pokemons = [
    {
      id: 1,
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      height: 7,
      weight: 69,
      types: [
        {
          name: "grass",
        },
        {
          name: "poison",
        },
      ],
    },
    {
      id: 2,
      name: "ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      hp: 60,
      attack: 62,
      defense: 63,
      speed: 60,
      height: 10,
      weight: 130,
      types: [
        {
          name: "grass",
        },
        {
          name: "poison",
        },
      ],
    },
    {
      id: 3,
      name: "venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      hp: 80,
      attack: 82,
      defense: 83,
      speed: 80,
      height: 20,
      weight: 1000,
      types: [
        {
          name: "grass",
        },
        {
          name: "poison",
        },
      ],
    },
    {
      id: 4,
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      hp: 39,
      attack: 52,
      defense: 43,
      speed: 65,
      height: 6,
      weight: 85,
      types: [
        {
          name: "fire",
        },
      ],
    },
    {
      id: 5,
      name: "charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      hp: 58,
      attack: 64,
      defense: 58,
      speed: 80,
      height: 11,
      weight: 190,
      types: [
        {
          name: "fire",
        },
      ],
    },
    {
      id: 6,
      name: "charizard",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
      hp: 78,
      attack: 84,
      defense: 78,
      speed: 100,
      height: 17,
      weight: 905,
      types: [
        {
          name: "fire",
        },
        {
          name: "flying",
        },
      ],
    },
    {
      id: 7,
      name: "squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
      hp: 44,
      attack: 48,
      defense: 65,
      speed: 43,
      height: 5,
      weight: 90,
      types: [
        {
          name: "water",
        },
      ],
    },
    {
      id: 8,
      name: "wartortle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
      hp: 59,
      attack: 63,
      defense: 80,
      speed: 58,
      height: 10,
      weight: 225,
      types: [
        {
          name: "water",
        },
      ],
    },
    {
      id: 9,
      name: "blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
      hp: 79,
      attack: 83,
      defense: 100,
      speed: 78,
      height: 16,
      weight: 855,
      types: [
        {
          name: "water",
        },
      ],
    },
    {
      id: 10,
      name: "caterpie",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
      hp: 45,
      attack: 30,
      defense: 35,
      speed: 45,
      height: 3,
      weight: 29,
      types: [
        {
          name: "bug",
        },
      ],
    },
    {
      id: 11,
      name: "metapod",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
      hp: 50,
      attack: 20,
      defense: 55,
      speed: 30,
      height: 7,
      weight: 99,
      types: [
        {
          name: "bug",
        },
      ],
    },
    {
      id: 12,
      name: "butterfree",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
      hp: 60,
      attack: 45,
      defense: 50,
      speed: 70,
      height: 11,
      weight: 320,
      types: [
        {
          name: "bug",
        },
        {
          name: "flying",
        },
      ],
    },
    {
      id: 13,
      name: "weedle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
      hp: 40,
      attack: 35,
      defense: 30,
      speed: 50,
      height: 3,
      weight: 32,
      types: [
        {
          name: "bug",
        },
        {
          name: "poison",
        },
      ],
    },
    {
      id: 14,
      name: "kakuna",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
      hp: 45,
      attack: 25,
      defense: 50,
      speed: 35,
      height: 6,
      weight: 100,
      types: [
        {
          name: "bug",
        },
        {
          name: "poison",
        },
      ],
    },
    {
      id: 15,
      name: "beedrill",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
      hp: 65,
      attack: 90,
      defense: 40,
      speed: 75,
      height: 10,
      weight: 295,
      types: [
        {
          name: "bug",
        },
        {
          name: "poison",
        },
      ],
    },
    {
      id: 16,
      name: "pidgey",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
      hp: 40,
      attack: 45,
      defense: 40,
      speed: 56,
      height: 3,
      weight: 18,
      types: [
        {
          name: "normal",
        },
        {
          name: "flying",
        },
      ],
    },
    {
      id: 17,
      name: "pidgeotto",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
      hp: 63,
      attack: 60,
      defense: 55,
      speed: 71,
      height: 11,
      weight: 300,
      types: [
        {
          name: "normal",
        },
        {
          name: "flying",
        },
      ],
    },
    {
      id: 18,
      name: "pidgeot",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
      hp: 83,
      attack: 80,
      defense: 75,
      speed: 101,
      height: 15,
      weight: 395,
      types: [
        {
          name: "normal",
        },
        {
          name: "flying",
        },
      ],
    },
    {
      id: 19,
      name: "rattata",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
      hp: 30,
      attack: 56,
      defense: 35,
      speed: 72,
      height: 3,
      weight: 35,
      types: [
        {
          name: "normal",
        },
      ],
    },
    {
      id: 20,
      name: "raticate",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
      hp: 55,
      attack: 81,
      defense: 60,
      speed: 97,
      height: 7,
      weight: 185,
      types: [
        {
          name: "normal",
        },
      ],
    },
    {
      id: 21,
      name: "spearow",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
      hp: 40,
      attack: 60,
      defense: 30,
      speed: 70,
      height: 3,
      weight: 20,
      types: [
        {
          name: "normal",
        },
        {
          name: "flying",
        },
      ],
    },
    {
      id: 22,
      name: "fearow",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
      hp: 65,
      attack: 90,
      defense: 65,
      speed: 100,
      height: 12,
      weight: 380,
      types: [
        {
          name: "normal",
        },
        {
          name: "flying",
        },
      ],
    },
    {
      id: 23,
      name: "ekans",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
      hp: 35,
      attack: 60,
      defense: 44,
      speed: 55,
      height: 20,
      weight: 69,
      types: [
        {
          name: "poison",
        },
      ],
    },
    {
      id: 24,
      name: "arbok",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
      hp: 60,
      attack: 95,
      defense: 69,
      speed: 80,
      height: 35,
      weight: 650,
      types: [
        {
          name: "poison",
        },
      ],
    },
    {
      id: 25,
      name: "pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      hp: 35,
      attack: 55,
      defense: 40,
      speed: 90,
      height: 4,
      weight: 60,
      types: [
        {
          name: "electric",
        },
      ],
    },
    {
      id: 26,
      name: "raichu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
      hp: 60,
      attack: 90,
      defense: 55,
      speed: 110,
      height: 8,
      weight: 300,
      types: [
        {
          name: "electric",
        },
      ],
    },
    {
      id: 27,
      name: "sandshrew",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
      hp: 50,
      attack: 75,
      defense: 85,
      speed: 40,
      height: 6,
      weight: 120,
      types: [
        {
          name: "ground",
        },
      ],
    },
    {
      id: 28,
      name: "sandslash",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
      hp: 75,
      attack: 100,
      defense: 110,
      speed: 65,
      height: 10,
      weight: 295,
      types: [
        {
          name: "ground",
        },
      ],
    },
    {
      id: 29,
      name: "nidoran-f",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",
      hp: 55,
      attack: 47,
      defense: 52,
      speed: 41,
      height: 4,
      weight: 70,
      types: [
        {
          name: "poison",
        },
      ],
    },
    {
      id: 30,
      name: "nidorina",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
      hp: 70,
      attack: 62,
      defense: 67,
      speed: 56,
      height: 8,
      weight: 200,
      types: [
        {
          name: "poison",
        },
      ],
    },
    {
      id: 31,
      name: "nidoqueen",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
      hp: 90,
      attack: 92,
      defense: 87,
      speed: 76,
      height: 13,
      weight: 600,
      types: [
        {
          name: "poison",
        },
        {
          name: "ground",
        },
      ],
    },
    {
      id: 32,
      name: "nidoran-m",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",
      hp: 46,
      attack: 57,
      defense: 40,
      speed: 50,
      height: 5,
      weight: 90,
      types: [
        {
          name: "poison",
        },
      ],
    },
    {
      id: 33,
      name: "nidorino",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
      hp: 61,
      attack: 72,
      defense: 57,
      speed: 65,
      height: 9,
      weight: 195,
      types: [
        {
          name: "poison",
        },
      ],
    },
    {
      id: 34,
      name: "nidoking",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
      hp: 81,
      attack: 102,
      defense: 77,
      speed: 85,
      height: 14,
      weight: 620,
      types: [
        {
          name: "poison",
        },
        {
          name: "ground",
        },
      ],
    },
    {
      id: 35,
      name: "clefairy",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
      hp: 70,
      attack: 45,
      defense: 48,
      speed: 35,
      height: 6,
      weight: 75,
      types: [
        {
          name: "fairy",
        },
      ],
    },
    {
      id: 36,
      name: "clefable",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
      hp: 95,
      attack: 70,
      defense: 73,
      speed: 60,
      height: 13,
      weight: 400,
      types: [
        {
          name: "fairy",
        },
      ],
    },
    {
      id: 37,
      name: "vulpix",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
      hp: 38,
      attack: 41,
      defense: 40,
      speed: 65,
      height: 6,
      weight: 99,
      types: [
        {
          name: "fire",
        },
      ],
    },
    {
      id: 38,
      name: "ninetales",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
      hp: 73,
      attack: 76,
      defense: 75,
      speed: 100,
      height: 11,
      weight: 199,
      types: [
        {
          name: "fire",
        },
      ],
    },
    {
      id: 39,
      name: "jigglypuff",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
      hp: 115,
      attack: 45,
      defense: 20,
      speed: 20,
      height: 5,
      weight: 55,
      types: [
        {
          name: "normal",
        },
        {
          name: "fairy",
        },
      ],
    },
    {
      id: 40,
      name: "wigglytuff",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
      hp: 140,
      attack: 70,
      defense: 45,
      speed: 45,
      height: 10,
      weight: 120,
      types: [
        {
          name: "normal",
        },
        {
          name: "fairy",
        },
      ],
    },
  ];
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
