import { Link } from "react-router-dom";
import style from "./Landing.modules.css";

const Landing = () => {
  return (
    <div>
      <div>
        <Link to="/home">
          <button className={style.home}> Atrápalos! </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
