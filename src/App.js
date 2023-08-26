import { useState, useEffect } from "react";
import "./App.css";
import { getPosts } from "./api/axios";
import SearchBar from "./SearchBar";
import ListPage from "./ListPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setsearchResults] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setsearchResults(json);
      });
  }, []);

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setsearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  );
}

export default App;
