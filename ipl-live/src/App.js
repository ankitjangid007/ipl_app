import './App.css';
import Header from './components/Header';
import Match from './components/Match';
import Schedule from './components/Schedule';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Schedule />
    </div>
  );
}

export default App;
