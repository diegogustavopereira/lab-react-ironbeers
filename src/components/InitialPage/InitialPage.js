import './InitialPage.css';

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


import beersImg from "../../assets/beers.png";
import randomBeers from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";
import { useEffect, useState } from 'react';
import axios from 'axios';


function InitialPage({apiURL}) {

  const [beer, setBeer] = useState([]);
    
  //busca os dados da API, permitindo a sua exibição na lista
  useEffect(() => {
    axios
      .get(`${apiURL}/random`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const beerId = beer._id;

  return (
    <div>
      <Container className='BeerCard' >
        <Card style={{ width: "18rem"}} className="AllBeers">
          <Link to="/BeersList">
            <img src={beersImg} alt="Beers" style={{ width: "18rem" }} />
          </Link>
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="RandomBeer">
          <Link className="nav-link" to={`/beer/${beerId}`}>
            <img
              src={randomBeers}
              alt="randomBeer"
              style={{ width: "18rem" }}
            />
          </Link>

          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="NewBeer">
          <Link to="/NewBeer">
            <img src={newBeer} alt="newBeer" style={{ width: "18rem" }} />
          </Link>
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default InitialPage;
