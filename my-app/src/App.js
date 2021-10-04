import logo from './logo.svg';
import './App.css';


function App(results) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {results.map((shoeResults)  => {
          return  <ul>
            <li>size:  {shoeResults.size}</li>
            <li>brand: {shoeResults.brand_name}</li>
            <li>maker: {shoeResults.manufacturer}</li>
            <li>color: {shoeResults.color}</li>
            <li>material: {shoeResults.material}</li>
            <li>type:  {shoeResults.shoe_type}</li>
            <li>fasten: {shoeResults.fasten_type}</li>
            </ul>
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
