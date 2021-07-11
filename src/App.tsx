import './App.css'
import { Router } from 'pages';
import { BrowserRouter } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </header>
    </div>
  );
}