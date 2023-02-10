import loader from '../images/ball.svg';

function Loader({ message }) {
  return (
    <div className="loader">
      <img src={loader} alt="Chargement..." />
      <h2>{message}</h2>
    </div>
  );
}

export default Loader;