import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Greetings from './Greetings';
import SayHello from './SayHello';
import Hello from './Hello';

function App() {
  return (
    <div className = 'App'>
      <img src={logo} alt ='logo'></img>
      <h1>Hello</h1>
      <h1>Test</h1>
      <Welcome />
      <Greetings name='From Deep'/>
      <SayHello fname = 'Deep '  lname ='lakhani'/>
      <Hello />
    </div>
  );
}

export default App;
