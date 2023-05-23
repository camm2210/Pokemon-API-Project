import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokeById } from "../../redux/actions";
import image from "../../images/loading.gif";

const Detail = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokeById(props.match.params.id));
  }, []);

  const poke = useSelector((state) => state.pokeId);

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Detail;
