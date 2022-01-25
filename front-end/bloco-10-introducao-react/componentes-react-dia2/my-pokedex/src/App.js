import Pokedex from "./Pokedex";
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="pokemon-list">
        <Pokedex listPokemon={data} />
      </div>
    </div>
  );
}

export default App;
