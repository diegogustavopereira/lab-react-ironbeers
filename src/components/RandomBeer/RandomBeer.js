import axios from "axios";
import { useEffect, useState } from "react";
import RenderBeerDetailsCard from "../BeerDetails/RenderBeerDetailsCard";

function RandomBeer({ apiURL }) {
  const [beer, setBeer] = useState([]);
  //estabelece que a variável id é igual ao parâmetro da rota dinâmica que,
  //no caso, foi indicado como o id do item do banco de dados

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
      {<RenderBeerDetailsCard apiURL={apiURL} beerId={beerId} />}
    </div>
  );
}

export default RandomBeer;
