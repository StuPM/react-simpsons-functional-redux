import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Character from "./Character";
import NavigationButtons from "./NavigationButtons";

import "./styles/SimpsonsQuoteController.scss";

const SimpsonsQuoteController = () => {
  const simpsons = useSelector((state) => state.simpsons);
  const dispatch = useDispatch();

  useEffect(() => {
    // callSimpsonsAPI();
  }, []);

  async function callSimpsonsAPI() {
    const count = 5;

    const simpsonsAPIData = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`
    );

    for (const element of simpsonsAPIData.data) {
      element.quoteRead = "notRead";
      element.visible = true;
    }

    dispatch({ type: "SETSIMPSONSDATA", payload: simpsonsAPIData.data });
  }

  if (!simpsons) {
    return (
      <>
        <h2>Loading...</h2>
        <p>Check console for any errors.</p>
      </>
    );
  }

  return (
    <>
      <NavigationButtons getNewQuotes={callSimpsonsAPI} />
      {simpsons.map(
        (element) =>
          element.visible && (
            <div
              key={element.quote}
              className={`quoteContainer ${element.quoteRead}`}
            >
              <Character
                character={element.character}
                quote={element.quote}
                image={element.image}
                alt={element.character}
                order={element.characterDirection === "Left" ? -1 : 1}
                quoteRead={element.quoteRead}
              />
            </div>
          )
      )}
    </>
  );
};

export default SimpsonsQuoteController;
