import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import AddEmployee from "./AddEmployee";
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import EditEmployee from './EditEmployee';
import{EmployeesCrudContextProvider} from "../context/EmployeesCrudContext";

function App() {
  return (
    <div className='ui container'>
      <Router>
    <Header />
    <EmployeesCrudContextProvider>
    <Routes>
    <Route path="/" 
    exact
    element={<EmployeeList />}
    />
    <Route path="/add" 
    exact 
    element={<AddEmployee />}
    />
    <Route path="/update/:id" 
    exact 
    element={<EditEmployee />}
    />
    <Route path="/find/:id" element={<EmployeeDetails />}/>
    </Routes>
    </EmployeesCrudContextProvider>
    </Router>
    </div>
  );
}

export default App;
