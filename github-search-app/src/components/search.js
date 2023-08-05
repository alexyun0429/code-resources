// src/components/Search.js
import React, { useState } from "react";
import "./search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.items));
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search GitHub username"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        {/* <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button> */}
      </form>
      <div className="results-container">
        <span className="results-count">
          Results:{" "}
          <span className="results-number">{searchResults.length}</span>
        </span>
        <ul className="results-list">
          {searchResults.map((user) => (
            <li key={user.id} className="user-card">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="user-avatar"
              />
              <span className="user-name">{user.login}</span>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-button"
              >
                View
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
