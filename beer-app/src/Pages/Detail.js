import "./detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let params = useParams();
  let [beer, setBeer] = useState([]);

  let fetchBeers = () => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=1&per_page=6")
      .then((response) => {
        let beers = response.data;
        let beer = beers.find((beer) => beer.name === params.name);
        setBeer(beer);
      });
  };

  useEffect(() => fetchBeers(), []);

  return (
    <div className="container">
      <div className="description">
        <img src={beer.image_url} alt="beer" />
        <div className="detail">
          <h3>{beer.name}</h3>
          <p>{beer.description}</p>
        </div>
      </div>

      <div className="container-2">
        <span className="alc">Alc. </span><span className="abv"> {beer.abv} %</span>

        <h4 className="foodpairing">Food pairing</h4>

        <ul className="element">
            {beer.food_pairing && beer.food_pairing.map((element, index) => 
                <li key={index}>{element}</li>
            )}
        </ul>

        <span className="alc">Ibu </span><span className="abv"> {beer.ibu}</span>

      </div>
    </div>
  );
}

export default Detail;
