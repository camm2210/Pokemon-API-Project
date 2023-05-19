import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>
        <Link to="/home">
          <button className={styel.home}> Atrápalos! </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
