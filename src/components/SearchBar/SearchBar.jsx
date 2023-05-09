import React, { useState } from "react";
import "./SearchBar.scss";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [filteredPostNames, setFilteredPostNames] = useState([]);

  const posts = [
    { id: "1", name: "This first post is about React" },
    { id: "2", name: "This next post is about Preact" },
    { id: "3", name: "We have yet another React post!" },
    { id: "4", name: "This is the fourth and final post" },
  ];

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

  const filteredPosts = (query, posts) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };

  const availablePosts = filteredPosts(query, posts).map((post) => post.name);

  const addSelectedPost = (postName) => {
    if (!selectedPosts.includes(postName)) {
      setSelectedPosts([...selectedPosts, postName]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredPost = filteredPosts(query, posts)[0];
    if (filteredPost && !filteredPostNames.includes(filteredPost.name)) {
      setFilteredPostNames([...filteredPostNames, filteredPost.name]);
    }
    setQuery("");
  };

  const handleRemoveTag = (tagName) => {
    setFilteredPostNames(filteredPostNames.filter((name) => name !== tagName));
  };

  return (
    <div className="search">
      <div className="search__categories">
        <p className="p--large">Tags</p>
        <div className="search__category-container">
          {selectedPosts.map((post) => (
            <div className="search__category" key={post}>
              {post}
            </div>
          ))}
        </div>
        <div className="search__category-container">
          {filteredPostNames.map((tagName) => (
            <div className="search__category" key={tagName}>
              {tagName}
              <button
                className="search__category--close"
                type="button"
                onClick={() => handleRemoveTag(tagName)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        </div>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search blog posts"
            className="search__input"
            name="s"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search__button"type="submit">Submit</button>
        </form>
      </div>
  );
}

export default SearchBar;
