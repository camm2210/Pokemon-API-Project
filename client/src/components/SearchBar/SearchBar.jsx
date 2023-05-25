import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const inputHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const submitHandler = () => {
    dispatch(getPokeByName(name));
  };

  return (
    <div className="style.holder">
      <input
        type="text"
        onChange={(event) => inputHandler(event)}
        className={style.input}
      />
      <button
        type="submit"
        onClick={() => submitHandler(name)}
        className={style.button}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
