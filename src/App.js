import "./App.css";
import BeersList from "./components/BeersList/BeersList";

import axios from "axios";
import { useEffect, useState } from "react";

import InitialPage from "./components/InitialPage/InitialPage";
import { Route, Routes } from "react-router-dom";
import RandomBeer from "./components/RandomBeer/RandomBeer";
import NewBeer from "./components/NewBeer/NewBeer";

function App() {

  const [beers, setBeers] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      setBeers(response.data);
      console.log(response.data);
      setFetching(false);
    })
    .catch((error) => console.log(error));
  },
  []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/BeersList" element={<BeersList beers={beers} setBeers={setBeers} />} />
        <Route path="/RandomBeer" element={<RandomBeer />} />
        <Route path="/NewBeer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
