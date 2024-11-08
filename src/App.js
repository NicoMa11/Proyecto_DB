import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuCRUD from './components/MenuCRUD'; 
import OrdersCRUD from './components/OrdersCRUD';
import InventaryCRUD from './components/InventaryCRUD'
import ClientsCRUD from './components/ClientsCRUD'
import EmployeesCRUD from './components/EmployeesCRUD';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/menu" element={<MenuCRUD />} /> 
        <Route path="/orders" element={<OrdersCRUD />} />
        <Route path="/inventary" element={<InventaryCRUD />} />
        <Route path="/clients" element={<ClientsCRUD />} />
        <Route path="/employees" element={<EmployeesCRUD />} />
        
      </Routes>
    </Router>
  );

}

export default App;

