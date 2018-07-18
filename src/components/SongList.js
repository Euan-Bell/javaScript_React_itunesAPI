import React from "react";

const SongList = (props) => {
  if (!props.entry) return null;
  return(
    <div>
      <h3>{props.entry}</h3>
    </div>
  );
}

export default SongList;
