import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Plugin from './components/Plugin';
import Header from './components/Header';


function App() {
  return (
    <div>
      <BrowserRouter>

      <Header>
        
      </Header>
     
      <Routes>
     
     <Route element={<Login></Login>} path="login"/>
     <Route element={<Signup></Signup>} path="signup" />
     <Route element={<Plugin></Plugin>} path="plugin" />
    



      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
