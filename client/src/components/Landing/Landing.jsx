import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import image from "../../images/game.png";
import huevo from "../../images/huevo.gif";

const Landing = () => {
  return (
    <div className={style.position}>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={image} alt="Pokemon" width="550px" />
        <Link to="/home">
          <button className={style.boton}>Catch'em All</button>
        </Link>
        <div style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <img src={huevo} alt="Loading.." width="200px" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
