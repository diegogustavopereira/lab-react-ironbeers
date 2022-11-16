import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import BeersList from "./components/BeersList/BeersList";

import { useState } from "react";

import InitialPage from "./components/InitialPage/InitialPage";
import { Route, Routes } from "react-router-dom";
import RandomBeer from "./components/RandomBeer/RandomBeer";
import NewBeer from "./components/AddBeer/NewBeer";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import HeaderBar from "./components/HeaderBar/HeaderBar";

function App() {

  const [form, setForm] = useState(
    {
      name: "", 
      tagline: "", 
      description: "", 
      first_brewed: "", 
      brewers_tips: "",
      attenuation_level: 0, 
      contributed_by: ""
    }
  );

  const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<InitialPage apiURL={apiURL} />} />
        <Route path="/BeersList" element={<BeersList apiURL={apiURL} />} />
        <Route path="beer/:id" element={ <BeerDetails apiURL={ apiURL } />} />
        <Route path="/RandomBeer" element={<RandomBeer apiURL={apiURL}/>} />
        <Route path="/NewBeer" element={<NewBeer apiURL={ apiURL } form={ form } setForm={ setForm }/>} />
      </Routes>
    </div>
  );
}

export default App;
