// import logo from './logo.svg';
import './App.css';

// Crie uma lista de tarefas simples seguindo os passos abaixo:
// insira a função Task a seguir acima do seu componente App dentro do arquivo App.js :
const tasks = ['Levar o cachorro pra passear;', 'Ir ao mercado;', 'Lavar roupas', 'Lavar o quintal', 'Fazer os exercicios'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ol>
        <h1>Lista de tarefas</h1>
        { tasks.map((item) => Task(item)) }
      </ol>
    </div>
  );
}

export default App;
