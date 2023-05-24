import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getTypes, postPokemon, cleanPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";

const PokemonCreate = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    image: "",
  });

  let noEmpty = /\S+/;
  let validateName = /^[a-z]+$/i;
  let validateNum = /^\d+$/;
  let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/;

  const validate = (input) => {
    let errors = {};
    if (
      !noEmpty.test(input.name) ||
      !validateName.test(input.name) ||
      input.name.length < 3
    ) {
      errors.name =
        "Name required. Only string of more than two characters and without numbers";
    }
    if (!validateNum.test(input.hp) || parseInt(input.hp) < 1) {
      errors.hp = "Number required. Higher than one";
    }
    if (!validateNum.test(input.attack) || parseInt(input.attack) < 1) {
      errors.attack = "Number required. Higher than one";
    }
    if (!validateNum.test(input.defense) || parseInt(input.defense) < 1) {
      errors.defense = "Number required. Higher than one";
    }
    if (!validateNum.test(input.speed) || parseInt(input.speed) < 1) {
      errors.speed = "Number required. Higher than one";
    }
    if (!validateNum.test(input.height) || parseInt(input.height) < 1) {
      errors.height = "Number required. Higher than one";
    }
    if (!validateNum.test(input.weight) || parseInt(input.weight) < 1) {
      errors.weight = "Number required. Higher than one";
    }
    if (!validateUrl.test(input.image)) {
      errors.img = "URL required";
    }

    return errors;
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelect = (event) => {
    if (input.types.length < 2) {
      setInput({
        ...input,
        types: [...input.types, event.target.value],
      });
      event.target.value = "Select type";
    } else {
      alert("Two types of pokemon at most");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !errors.name &&
      !errors.hp &&
      !errors.attack &&
      !errors.defense &&
      !errors.speed &&
      !errors.height &&
      !errors.weight &&
      !errors.image
    ) {
      dispatch(postPokemon(input));
      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        image: "",
      });
      dispatch(cleanPokemons(dispatch));
      history.push("/home");
    } else {
      alert("Error. Check the form");
    }
  };

  const handleDelete = (event) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== event),
    });
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Link to="/home">
        <button className={style.btn}>Go Back</button>
      </Link>
      <form
        className={style.form}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <h2 className={style.h2}>Create a pokemón!</h2>
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
            <p className={style.p}>{errors.name}</p>
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
            <p className={style.p}>{errors.hp}</p>
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
            <p className={style.p}>{errors.attack}</p>
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
            <p className={style.p}>{errors.defense}</p>
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
            <p className={style.p}>{errors.speed}</p>
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
            <p className={style.p}>{errors.height}</p>
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
            <p className={style.p}>{errors.weight}</p>
            <label className={style.label}>Image:</label>
            <input
              className={style.input}
              type="string"
              value={input.image}
              name="img"
              onChange={(event) => {
                handleChange(event);
              }}
              placeholder="URL Image..."
            />
            <p className={style.p}>{errors.img}</p>
          </div>
        </div>
        <div>
          <select
            className={style.select}
            onChange={(e) => {
              handleSelect(e);
            }}
          >
            <option>Select type</option>
            {types?.map((type, key) => {
              return (
                <option key={key} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
          {
            input.types.map((type, key) => {
              return (
                <div className={style.typesSelect} key={key}>
                  <p className={style.pTypes}>{type}</p>
                  <button
                    className={style.btnDelete}
                    onClick={(event) => {
                      handleDelete(event);
                    }}
                  >
                    x
                  </button>
                </div>
              );
            }) //para poder ver que fui seleccionando
          }
        </div>
        <button className={style.btnCreate} type="submit">
          Create!
        </button>
      </form>
    </div>
  );
};

export default PokemonCreate;
