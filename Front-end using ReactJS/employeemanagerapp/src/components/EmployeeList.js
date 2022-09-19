import React from "react";
import EmployeeCard from "./EmployeeCard";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useEmployeesCrud } from "../context/EmployeesCrudContext";
 
const EmployeeList=()=>{
    const{employees,retriveEmployees,searchTerm,searchResult,searchHandler}=useEmployeesCrud();
    

    useEffect(()=>{
        retriveEmployees();
    },[]);
    const renderEmployeeList=(searchTerm.length<1?employees:searchResult).map((employee)=>{
        return(
            <EmployeeCard employee={employee} 
            key={employee.id} />
        );
    });

    const onUserSearch  =(e)=>{
        searchHandler(e.target.value);
    };


    return(
        
        <div className="main">
           <div className="center-div">
            <h2><br></br><br></br>Employee List    

            </h2>

            <div className="ui search">
                <div className="ui icon input">
                    <input
                    type="text"
                    placeholder="Search Employees"
                    className="prompt"
                    value={searchTerm}
                    onChange={(e)=>onUserSearch(e)}
                    />
                    <i className="search icon"></i>
                </div>
                <Link to="/add">
                    <button className="ui button blue right">Add Employee</button>
                    </Link>
            </div>
            </div>
        <div className="ui celled list">
           {renderEmployeeList}
        </div>
        </div>

    );
};

export default EmployeeList;