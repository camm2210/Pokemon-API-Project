import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.div}>
      <div className={style.preloader}></div>
    </div>
  );
};

export default Loading;
