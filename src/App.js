import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home'
import {Login} from './components/Login'

function App() {
  return (
    <div className="container">
     <Home/>
     <Login/>
    </div>
  );
}

export default App;
