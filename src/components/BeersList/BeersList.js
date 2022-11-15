import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom"

import HeaderBar from "../HeaderBar/HeaderBar";
import { useEffect, useState } from "react";
import axios from "axios";

// recebe a API
function BeersList({ apiURL }) {

  //estabelece o estado
  const [beers, setBeers] = useState([]);

  //busca os dados da API, permitindo a sua exibição na lista
  useEffect(() => {
    axios
    .get(apiURL)
    .then(response => {
      setBeers(response.data)
    })
    .catch(error => console.log(error))
}, []);
  
  
  const ListBeers = beers.map((beer) => {
    console.log(beer);
    return (
      <Card key={beer._id} style={{ width: "30rem", padding: "10px" }}>
      <Row>
        <Col>
        <Link className="nav-link" to={`/beer/${beer._id}`}>
          <img src={beer.image_url} style={{ height: "100px" }} alt={beer.image_url}/>
          </Link>
        </Col>
        <Col xs={9} style={{ textAlign:"left" }}>
          <Card.Title>{beer.name}</Card.Title>
          <Card.Subtitle style={{color: "grey"}}>{beer.tagline}</Card.Subtitle>
          <Card.Text><b>Created by: </b>{beer.contributed_by}</Card.Text>
        </Col>
        </Row>
      </Card>
      
    );
  });

  return (
    <Container>
      <HeaderBar />
      {ListBeers}
    </Container>
  );
}

export default BeersList;
