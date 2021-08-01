import React, { useState } from "react";
function GifSearch({ submitHandler }) {
  const [query, setQuery] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitHandler(query);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="search">Search here :</label>
        <input
          id="search"
          className="form-control"
          type="text"
          style={{ textAlign: "center" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div class=" text-center ">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default GifSearch;
