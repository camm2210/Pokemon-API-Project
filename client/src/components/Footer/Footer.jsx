import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <p>
        Coded by{" "}
        <a
          className={style.a}
          target="_blank"
          href="https://github.com/camm2210"
          rel="noreferrer"
        >
          Cami
        </a>
      </p>
    </div>
  );
};

export default Footer;
