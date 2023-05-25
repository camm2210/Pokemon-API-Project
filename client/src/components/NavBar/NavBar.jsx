import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import image from "../../images/logo.png";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home">
        <img
          id="logoPoke"
          src={image}
          width="90"
          alt="landing"
          className={style.img}
        />
      </Link>
      <SearchBar />
      <Link to="/create">
        <button className={style.button}> Create your pokemon! </button>
      </Link>
    </div>
  );
};

export default NavBar;
