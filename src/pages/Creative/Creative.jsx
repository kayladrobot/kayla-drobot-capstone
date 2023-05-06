import React from "react";
import "./Creative.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

function Creative() {

  return (
    <div className="creative">
      <SearchBar/>
      <div className="creative__cards">
        <div className="creative__card">
          {/* <CreativeCard/> */}
        </div>
      </div>
    </div>
  );
}

export default Creative;
