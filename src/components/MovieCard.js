import React, { useEffect, useState } from "react";
import { callmultipleEndpoints } from "./../helper/helpers";
import CharacterList from "./CharacterList";


const MovieCard = ({ title: movieTitle, opening_crawl, characters }) => {
  /* useEffect requires I remove title as its a dependency so I chose to use movieTitle*/
  
  const [characterList, setCharacterList] = useState(null);
  useEffect(() => {
    (async () => {
      if (typeof characters !== "undefined") {
        const charactersDataFromEndpoints = await callmultipleEndpoints(
          characters
        );
        if (charactersDataFromEndpoints) {
          setCharacterList(charactersDataFromEndpoints);
        }
      }
    })();
  }, [characters]);

  return (
    <><div className="movie-card-div">
          <div className="movieCard">
              <div className="titleDiv">
                  <p className="title">
                      <b>Movie: </b>
                      {movieTitle}
                  </p>
              </div>
              <div id="scroll-container">
                  <div id="scroll-text">{opening_crawl}</div>
              </div>
              <div className="titleDiv">
                  <p className="title">
                      <b>Character list</b>
                  </p>
              </div>

          </div>
      </div>
    <div className="chList">{characterList ? <CharacterList list={characterList} /> : ""}</div></>
  );
};

export default MovieCard;
