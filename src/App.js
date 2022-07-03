import logo from './logo.svg';
import './App.css';

// const API_URL = 'https://production.api';
const API_URL = 'https://development.api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {API_URL}
        </p>
        {process.env.NODE_ENV}
      </header>
    </div>
  );
}

export default App;
