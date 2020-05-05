import React from "react";

import "./GlobalSearchBox.css";

function GlobalSearchBox(props) {
  return (
    <div className="GlobalSearchBox">
      <input
        type="text"
        placeholder=" Search..."
        onChange={props.handleGlobalChange}
      />
      <i className="fa fa-fw fa-search" />
    </div>
  );
}

export default GlobalSearchBox;
