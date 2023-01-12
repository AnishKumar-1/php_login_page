import {Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Registration from './Registration';
function App() {
  return (
    <div className="App">
    <Navigation/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/registration' element={<Registration/>}/>
    </Routes>
    </div>
  );
}

export default App;
