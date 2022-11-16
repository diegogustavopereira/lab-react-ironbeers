import axios from "axios";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RenderBeerDetailsCard({ apiURL, beerId }) {
  //estabelece o estado
  console.log(beerId)
  console.log(`${apiURL}/${beerId}`)
  const [beer, setBeer] = useState([]);

  //estabelece que a variável id é igual ao parâmetro da rota dinâmica que,
  //no caso, foi indicado como o id do item do banco de dados pela BeersList
  const { id } = useParams();

  //busca os dados da API, permitindo a sua exibição na lista
  useEffect(() => {
    if (!beerId) {
        console.log("id ausente")
      axios
        .get(`${apiURL}/${id}`)
        .then((response) => {
          setBeer(response.data);
        })
        .catch((error) => console.log(error));
    } else {
        console.log("id presente")
      axios
        .get(`${apiURL}/${beerId}`)
        .then((response) => {
          setBeer(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <Container>
      
      <Card
        key={beer._id}
        style={{ width: "22rem", padding: "10px", margin: "10px" }}
      >
        <Row style={{ justifyContent: "center" }}>
          <img
            src={beer.image_url}
            style={{ height: "250px", width: "auto" }}
            alt={beer.image_url}
          />
        </Row>
        <Row>
          <p> </p>
          <Col xs={9} style={{ textAlign: "left" }}>
            <Card.Title>{beer.name}</Card.Title>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Card.Title style={{ color: "grey" }}>
              {beer.attenuation_level}
            </Card.Title>
          </Col>
        </Row>
        <Row>
          <Col xs={9} style={{ textAlign: "left" }}>
            <Card.Subtitle style={{ color: "grey" }}>
              {beer.tagline}
            </Card.Subtitle>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Card.Subtitle>{beer.first_brewed}</Card.Subtitle>
          </Col>
        </Row>
        <p> </p>
        <Card.Text>{beer.description}</Card.Text>
        <Row>
          <Card.Text style={{ color: "grey" }}>
            <b>Created by: </b>
            {beer.contributed_by}
          </Card.Text>
        </Row>
      </Card>
    </Container>
  );
}

export default RenderBeerDetailsCard;
