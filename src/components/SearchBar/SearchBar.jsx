import React from "react";
import "./SearchBar.scss";

function SearchBar({ setQuery, handleSubmit, query, availablePosts, addSelectedPost}) {
    const SearchSuggestions = () => {
        return (
          <div className="search-suggestions">
            {availablePosts.map((post) => (
              <div
                className="search-suggestion"
                key={post}
                onClick={() => addSelectedPost(post)}
              >
                {post}
              </div>
            ))}
          </div>
        );
      };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        name="s"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Submit</button>
      {query && <SearchSuggestions />}
    </form>
  );
}

export default SearchBar;
