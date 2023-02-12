import { Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='title'>Beer App!</p>
        
        <div className='search'>
          <input className='header-input' placeholder=' Hoppy, Malt, Angry, New'></input>
          <button className='search-btn'>RECHERCHE</button>
        </div>
      </header>
      

      <Outlet/>
    </div>
  );
}

export default App;
