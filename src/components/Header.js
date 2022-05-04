import React from "react";
import Search from "./Search";

function Header({searchItems}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchItems={searchItems} />
    </header>
  );
}

export default Header;
