import React, { useEffect, useState } from "react";
//Components
import GifSearch from "./GifSearch";
import GifList from "./GifList";
function GifListContainer() {
  //states
  const [query, setQuery] = useState("dolphin");
  const [list, setList] = useState([]);
  const API_KEY = "h109Dkb0KLITDtijFjg7RZvcmlPT5Ftx";

  //fetching
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g&limit=3`
    )
      .then((r) => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setList(gifs);
      });
  }, [query]);
  console.log(list);
  //functions
  const submitHandler = (data) => {
    setQuery(data);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <GifSearch submitHandler={submitHandler} />
      <GifList lists={list} />
    </div>
  );
}

export default GifListContainer;
