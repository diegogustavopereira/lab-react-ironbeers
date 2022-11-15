import "./App.css";
import BeersList from "./components/BeersList/BeersList";

import { useState } from "react";

import InitialPage from "./components/InitialPage/InitialPage";
import { Route, Routes } from "react-router-dom";
import RandomBeer from "./components/RandomBeer/RandomBeer";
import NewBeer from "./components/NewBeer/NewBeer";
import BeerDetails from "./components/BeerDetails/BeerDetails";

function App() {

  const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InitialPage apiURL={apiURL} />} />
        <Route path="/BeersList" element={<BeersList apiURL={apiURL} />} />
        <Route path="beer/:id" element={ <BeerDetails apiURL={ apiURL } />} />
        <Route path="/RandomBeer" element={<RandomBeer apiURL={apiURL}/>} />
        <Route path="/NewBeer" element={<NewBeer apiURL={ apiURL }/>} />
      </Routes>
    </div>
  );
}

export default App;
