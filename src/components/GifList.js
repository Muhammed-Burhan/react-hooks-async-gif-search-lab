import React from "react";

function GifList({ lists }) {
  return (
    <ul className="list-group">
      {lists.map((list) => {
        return (
          <li
            style={{ textAlign: "center" }}
            className="list-group-item"
            key={list.url}
          >
            <img
              className="rounded mx-auto d-block"
              src={list.url}
              alt="GIFS"
            />
          </li>
        );
      })}
    </ul>
  );
}

export default GifList;
