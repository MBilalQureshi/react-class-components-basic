import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './component/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am stateful class component and I am here using prop" name="Bilal"/>
    </div>
  );
}

export default App;
