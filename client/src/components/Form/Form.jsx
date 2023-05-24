import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getTypes, postPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    setInput({
      ...input,
      types: [...input.types, event.target.value],
    });
  };

  const handleDelete = (event) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== event),
    });
  };

  // const handleCheck = (event) => {
  //   if (event.target.checked) {
  //     setInput({
  //       ...input,
  //       types: [...input.types, event.target.value]
  //     });
  //   }
  // }; types cheked?

  return (
    <div>
      <Link to="/home">
        <button className={style.btn}>All Pokemons!</button>
      </Link>
      <h2 className={style.h2}>Create a pokemón!</h2>
      <form
        className={style.form}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className={style.div}>
          <div className={style.divito}>
            <label className={style.label}>Name:</label>
            <input
              className={style.input}
              type="text"
              value={input.name}
              name="name"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="Name"
            />

            <label className={style.label}>HP:</label>
            <input
              className={style.input}
              type="number"
              value={input.hp}
              name="hp"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="HP"
            />

            <label className={style.label}>Attack:</label>
            <input
              className={style.input}
              type="number"
              value={input.attack}
              name="attack"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="Attack"
            />

            <label className={style.label}>Defense:</label>
            <input
              className={style.input}
              type="number"
              value={input.defense}
              name="defense"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="Defense"
            />
          </div>
          <div className={style.divito}>
            <label className={style.label}>Speed:</label>
            <input
              className={style.input}
              type="number"
              value={input.speed}
              name="speed"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="Speed"
            />

            <label className={style.label}>Height:</label>
            <input
              className={style.input}
              type="number"
              value={input.height}
              name="height"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="Height"
            />

            <label className={style.label}>Weight:</label>
            <input
              className={style.input}
              type="number"
              value={input.weight}
              name="weight"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="Weight"
            />

            <label className={style.label}>Image:</label>
            <input
              className={style.input}
              type="text"
              value={input.img}
              name="img"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="URL Image..."
            />
          </div>
        </div>
        <div>
          <select className={style.select}>
            <option>Select type</option>
            {types?.map((type, key) => {
              return (
                <option
                  key={key}
                  value={type}
                  onChange={(event) => {
                    handleSelect(event);
                  }}
                >
                  {type}
                </option>
              );
            })}
          </select>
          <ul>
            <li>{input.types.map((element) => element + " ,")}</li>
          </ul>
          <button className={style.btnCreate} type="submit">
            Create!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
