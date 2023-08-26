import React from "react";
import Post from "./Post";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((el) => <Post key={el.id} post={el} />);
  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );

  return <main>{content}</main>;
};

export default ListPage;
