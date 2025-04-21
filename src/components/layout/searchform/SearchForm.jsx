import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react"; // Using Lucide for icons
import "../navbar/Navbar.css";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/courses?q=${query}`);
    }
  };

  return (
    <form className="searchBox" onSubmit={handleSearch}>
      <input
        type="text"
        className="searchInput"
        placeholder="Search for anything"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="searchBox">
        <Search size={18} />
      </button>
    </form>
  );
};

export default SearchForm;
