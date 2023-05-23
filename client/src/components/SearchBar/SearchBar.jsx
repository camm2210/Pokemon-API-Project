import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName } from "../../redux/actions";

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
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => inputHandler(event)}
      />
      <button type="submit" onClick={() => submitHandler(name)}>
        Search Poke!
      </button>
    </div>
  );
};

export default SearchBar;
