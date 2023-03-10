import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SEARCHDATA, SORTDATA } from "../redux/types";

const NavigationButtons = (props) => {
  const readQuotes = useSelector((state) => state.readQuotes);
  const dispatch = useDispatch();

  const { getNewQuotes } = props;

  const searchQuotesByCharacter = () => {
    dispatch({
      type: SEARCHDATA,
      payload: document.getElementById("searchInput").value.toLowerCase(),
    });
  };

  return (
    <nav>
      <div className="navContainer">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: SORTDATA });
          }}
        >
          Sort by name
        </button>

        <input
          type="text"
          id="searchInput"
          placeholder="Search by name"
          onChange={searchQuotesByCharacter}
        />

        <button type="button" onClick={getNewQuotes}>
          Get new Quotes
        </button>
      </div>
      <div className="navQuotesRead">{`Number of read Quotes: ${readQuotes}`}</div>
    </nav>
  );
};

export default NavigationButtons;
