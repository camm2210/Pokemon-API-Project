import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home" className={style.linkText}>
        All pokemons
      </Link>
      <Link to="/create" className={style.linkText}>
        Create Your pokemon!
      </Link>
    </div>
  );
};

export default NavBar;
