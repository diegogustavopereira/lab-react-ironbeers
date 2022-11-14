import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";

import HeaderBar from "../HeaderBar/HeaderBar";

function BeersList({ beers, setBeers }) {
  console.log(beers);

  const ListBeers = beers.map((beer) => {
    console.log(beer);
    return (
      <Card key={beer._id} style={{ width: "30rem", padding: "10px" }}>
      <Row>
        <Col>
          <img src={beer.image_url} style={{ height: "100px" }}/>
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
