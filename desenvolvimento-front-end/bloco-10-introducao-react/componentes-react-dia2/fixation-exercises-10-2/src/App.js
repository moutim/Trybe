import logo from './logo.svg';
import Image from './Image';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
      </header>
    </div>
  );
}

export default App;
