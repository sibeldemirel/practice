import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  let [beers, setBeers] = useState([]);

  let fetchBeers = () => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=1&per_page=6")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      });
  };

  useEffect(() => fetchBeers(), []);

  return (
    <div className="card-body">
      {beers.map(beer => 
        <Link key={beer.id} to={`/biere/${beer.id}/${beer.name}`}>
          <div className="card">
            <p className="card-title">
              {beer.name}
            </p>
            <img src={beer.image_url} alt="" className="beer"></img>
          </div>
        </Link >
      )}

      
    </div>
  );
}

export default Home;
