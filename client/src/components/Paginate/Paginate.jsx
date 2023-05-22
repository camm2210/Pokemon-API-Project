import React from "react";
import style from "./Paginate.module.css";

const Pagination = ({ pokemonsPerPage, allPokemons, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.list}>
        {pageNumbers?.map((number) => (
          <li className={style.items} key={number}>
            <a className={style.a} onClick={() => pagination(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
