import { createContext, useContext, useState } from "react";
import api from "../api/employees";


const employeesCrudContext=createContext();

export function EmployeesCrudContextProvider({children}){
    const[employees,setEmployees]=useState([]);
    const [searchTerm,setSearchTerm]=useState([]);
    const [searchResult,setSearchResult]=useState([]);

//Retrive Employees
const retriveEmployees=async()=>{
    const response=await api.get(`/`);
    if(response.data) setEmployees(response.data);
  };

  //Add Employees 
  const addEmployeeHandler=async(employee)=>{
    const request={
      ...employee
    }
    const response=await api.post(`/add`,request)
    setEmployees([...employees,response.data]);
  };

  //update Employees
  const updateEmployeeHandler=
  async(employee)=>{
    const response=await api.put(`/update/${employee.id}`,employee)
    const{id}=response.data;
    setEmployees(
      employees.map((employee)=>{
      return employee.id===id?{...response.data}:employee;
    })
  );
};

//Search Functionality
    const searchHandler=(searchTerm)=>{
        setSearchTerm(searchTerm);
        if(searchTerm!==""){
            const newEmployeeList=employees.filter((employee)=>{
                return Object.values(employee)
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            });
            setSearchResult(newEmployeeList);
        }else{
            setSearchResult(employees);
        }
    };

  //Detete Employees
  const removeEmployeeHandler=async(id)=>{
    await api.delete(`/delete/${id}`);
    const newEmployeeList=employees.filter((employee)=>{
      return employee.id !== id;
    });

    setEmployees(newEmployeeList);
  };

    const value={
        searchTerm,
        searchResult,
        searchHandler,
        employees,
        retriveEmployees,
        removeEmployeeHandler,
        addEmployeeHandler,
        updateEmployeeHandler
    }
    return <employeesCrudContext.Provider value={value}>
        {children}
    </employeesCrudContext.Provider>
}

export function useEmployeesCrud(){
    return useContext(employeesCrudContext);
}