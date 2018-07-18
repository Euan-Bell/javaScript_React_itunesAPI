import React from "react";

const Song = (props) => {
  if (!props.feed) return null;
  return (
    <div>
      <h3>{props.feed.entry.title}</h3>
    </div>
  );
}

export default Song;
