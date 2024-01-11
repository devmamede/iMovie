import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busque um filme"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </form>
  );
};

export default SearchBar;
