import React, { useEffect, useState } from "react";
import "./App.css";
import starWarsLogo from "./starwars.png";
import Dropdown from "./components/Dropdown";
import MovieCard from "./components/MovieCard";



function App() {
  const [starWarsData, setstarWarsData] = useState(null);
  const [selctedMovie, setSelectedMovie] = useState(null);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    (async () => {
      // const fetchData = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://swapi.dev/api/films')}`);
      const fetchData = await fetch(`https://swapi.dev/api/films`);
      const dataF = await fetchData.json();
      setstarWarsData(dataF);
    })();
  }, []);

  const onDropDownSelect = (data) => {
    setSelectedMovie(data);
  };

  console.log("data", starWarsData);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-holder">
          <img src={starWarsLogo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div className="droppy-section">
        {starWarsData ? (
          <Dropdown {...starWarsData} onListSelect={onDropDownSelect} />
        ) : (
          ""
        )}
      </div>
      <div className="App-droppy">
        {/* starWarsData !== null
          ? starWarsData.results.map((result) => (
              <MovieCard {...result} key={result.edited} />
            ))
          : "" */}
      </div>
      <div className="w-100">
        {selctedMovie !== null && selctedMovie ? (
          <MovieCard {...selctedMovie} />
        ) : (
          ""
        )}
      </div>
      
    </div>
  );
}

export default App;
