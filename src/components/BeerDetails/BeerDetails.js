import RenderBeerDetailsCard from "./RenderBeerDetailsCard";

function BeerDetails({ apiURL }) {
   
    
  return (
    <div>
        { <RenderBeerDetailsCard apiURL={apiURL} />}
    </div>

  );
}

export default BeerDetails;
