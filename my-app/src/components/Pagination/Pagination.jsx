import React from "react";
import "./Pagination.module.css";

export default function Pagination({
  charactersPerPage,
  currentPage,
  allCharacters,
  pagination,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  if (currentPage === pageNumbers.length + 1) {
    pagination(1);
  }

  return (
    <div className="btnPag">
      <button
        onClick={() =>
          pagination(currentPage === 1 ? pageNumbers.length : currentPage - 1)
        }
      >
        {" "}
        «{" "}
      </button>

      {pageNumbers &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => pagination(number)}>
            {currentPage === number ? <b>{number}</b> : number}
          </button>
        ))}

      <button
        onClick={() =>
          pagination(currentPage === 0 ? currentPage : currentPage + 1)
        }
      >
        {" "}
        »{" "}
      </button>
    </div>
  );
}
