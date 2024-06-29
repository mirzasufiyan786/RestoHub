import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Login from './components/Login';
import Logout from './components/Logout';
// import Protected from './components/Protected';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  const isAuthenticated = localStorage.getItem('login');

  return (
    <Router>
      <Routes>
        <Route path='/login' element={!isAuthenticated? <Login/> : <Navigate to="/"/>}/>
        <Route path="/" element={isAuthenticated ? <Home/> : <Navigate to="/login"/>} />
        <Route path="/logout" element={isAuthenticated ? <Logout/> : <Navigate to="/login"/>} />
        <Route path="/list" element={isAuthenticated ? <RestaurantList/> : <Navigate to="/login"/>} />
        <Route path="/search" element={isAuthenticated ? <RestaurantSearch/> : <Navigate to="/login"/>} />
        <Route path="/create" element={isAuthenticated ? <RestaurantCreate/> : <Navigate to="/login"/>} />
        <Route path="/update/:id" element={isAuthenticated ? <RestaurantUpdate/> : <Navigate to="/login"/>} />
      </Routes>
    </Router>
  )
}

export default App
