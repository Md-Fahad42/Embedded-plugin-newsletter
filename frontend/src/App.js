import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Plugin from './components/Plugin';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Notfound from './components/Notfound';


function App() {
  return (
    <div>
      <BrowserRouter>

      <Header>
        
      </Header>
     
      <Routes>
     
     <Route element={<Login></Login>} path="login"/>
     <Route element={<Signup></Signup>} path="/" />
     <Route element={<Plugin></Plugin>} path="plugin" />
     <Route element={<Dashboard></Dashboard>} path="dashboard" /> 
     <Route element={<Notfound></Notfound>} path="*"></Route> 
    



      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
