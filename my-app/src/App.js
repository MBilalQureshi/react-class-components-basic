import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './component/StatefulGreeting';
import StatefulGreetingWithCallback from './component/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './component/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am stateful class component and I am here using prop" name="Bilal"/>
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
