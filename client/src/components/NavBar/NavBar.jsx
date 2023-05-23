import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home" className={style.linkText}>
        All pokemons
      </Link>
      <SearchBar />
      <Link to="/create" className={style.linkText}>
        Create Your pokemon!
      </Link>
    </div>
  );
};

export default NavBar;
