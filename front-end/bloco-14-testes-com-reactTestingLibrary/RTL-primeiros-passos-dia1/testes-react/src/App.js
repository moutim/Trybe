import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" data-testid="button-send" type="button" value="Enviar" />
      <input id="btn-back" data-testid="button=-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;
