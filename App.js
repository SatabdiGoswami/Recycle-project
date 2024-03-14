import './App.css'; 
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from'react-router-dom';        
import Home from './Components/Home';
import Search from './Components/Search';
import Item from './Components/Item';

function App() {
    return (
         <Router>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path="/Search/:For" element={<Search/>} />
                  <Route path="/Item/:Of" element={<Item/>} />
              </Routes>
         </Router>
  );
}




export default App;