import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokeById } from "../../redux/actions";
import image from "../../images/loading.gif";

const Detail = (props) => {
  console.log(props);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokeById(props.match.params.id));
  }, []);

  const poke = useSelector((state) => state.pokeId);

  return (
    <div>
      {poke.length && poke[0].id == props.match.params.id ? (
        <div>
          <Link to="/home">
            <button>Back</button>
          </Link>

          {/* caratula (name, img, id, types) */}

          <div>
            <div>
              <h1>
                {poke[0].name.charAt(0).toUpperCase() + poke[0].name.slice(1)}
              </h1>
              <p>Pokedex N° {poke[0].id}</p>
            </div>
            {<img src={poke[0].img ? poke[0].img : random} />}
            {/*types aquí*/}
            <div>
              {poke[0].types ? (
                poke[0].types.map((el) => {
                  return (
                    <img
                      src={`../../images/types/${el}.png`}
                      alt="Types"
                      height="160px"
                      key={el}
                    />
                  );
                })
              ) : (
                <span>Types not found</span>
              )}
            </div>
          </div>
          {/*details*/}
          <h1>Details</h1>
          <h2>Stats</h2>
          <div>
            <div>
              <div>
                <span>
                  <i></i> Hp
                </span>
              </div>
              <div>
                <span
                  style={{
                    width: poke[0].hp > 100 ? "100%" : poke[0].hp + "%",
                  }}
                  per={`${poke[0].hp}`}
                ></span>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <img src={sword} alt="Attack" height="16px" width="16px" />{" "}
                  Attack
                </span>
              </div>
              <div style={{ animationDelay: "0.1s" }}>
                <span
                  style={{
                    width: poke[0].attack > 100 ? "100%" : poke[0].attack + "%",
                  }}
                  per={`${poke[0].attack}`}
                  className={style.attack}
                ></span>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <i></i> Defense
                </span>
              </div>
              <div
                className={style.progress}
                style={{ animationDelay: "0.2s" }}
              >
                <span
                  style={{
                    width:
                      poke[0].defense > 100 ? "100%" : poke[0].defense + "%",
                  }}
                  per={`${poke[0].defense}`}
                  className={style.defense}
                ></span>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <img src={speed} alt="Speed" height="16px" width="16px" />{" "}
                  Speed
                </span>
              </div>
              <div
                className={style.progress}
                style={{ animationDelay: "0.3s" }}
              >
                <span
                  style={{
                    width: poke[0].speed > 100 ? "100%" : poke[0].speed + "%",
                  }}
                  per={`${poke[0].speed}`}
                  className={style.speed}
                ></span>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <img
                    src={"../../images/cards/weight.svg"}
                    alt="Weight"
                    height="16px"
                    width="16px"
                  />
                  Weight(Kg)
                </span>
              </div>
              <div
                className={style.progress}
                style={{ animationDelay: "0.5s" }}
              >
                <span
                  style={{
                    width: poke[0].weight > 100 ? "100%" : poke[0].weight + "%",
                  }}
                  per={`${poke[0].weight / 10}`}
                  className={style.weight}
                ></span>
              </div>
            </div>
            <div className={style.bar}>
              <div className={style.info}>
                <span>
                  <img
                    src={"../../images/cards/height.svg"}
                    alt="Height"
                    height="16px"
                    width="16px"
                  />{" "}
                  Height(M)
                </span>
              </div>
              <div
                className={style.progress}
                style={{ animationDelay: "0.6s" }}
              >
                <span
                  style={{
                    width: poke[0].height > 100 ? "100%" : poke[0].height + "%",
                  }}
                  per={`${poke[0].height / 10}`}
                  className={style.height}
                ></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img src={image} alt="Loading.." width="250px" />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
