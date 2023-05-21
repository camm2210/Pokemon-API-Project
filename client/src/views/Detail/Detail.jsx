import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPoke } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemon);

  useEffect((props) => {
    dispatch(getPoke());
  });

  return <div></div>;
};

export default Detail;
