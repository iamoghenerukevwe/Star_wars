import React, { useState } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import { mapMoviesByDateAndSortFromEarliestToNewest } from "./../helper/helpers";
export default function Dropdown({ results, onListSelect }) {
  const [toggleState, setToggleState] = useState(false);
  const [dropDownTitle, setDropDownTitle] = useState("Movies in the Star Wars Franchise");

  const selectTitle = (e, result) => {
    setDropDownTitle(e.target.dataset?.title);
    onListSelect(result);
    setToggleState(false);
  };

  return (
    <div className="flex-all-to-center-in-column">
      <div className="dropDown" onClick={(_e) => setToggleState(!toggleState)}>
        <div>
          <p>{dropDownTitle}</p>
        </div>
        <div>
          < FiArrowDownCircle /> 
        </div>
      </div>
      <div
        className={
          "flex-all-to-center-in-column mt-20 " + (!toggleState && "d-none")
        }
      >
        <div className="dropDown-list">
          <ul className="">
            {results !== null
              ? mapMoviesByDateAndSortFromEarliestToNewest(results).map(
                  (result) => (
                    <li
                      key={result.edited}
                      data-title={result.title}
                      onClick={(e) => selectTitle(e, result)}
                    >
                      {result.title}
                    </li>
                  )
                )
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
}
