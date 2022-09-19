import React from "react";
import user from "../images/icons8-user-100.png";
import {Link, useLocation} from "react-router-dom";

const EmployeeDetails=(props)=>{
    const location=useLocation();
    const {name,email,jobTitle,phone,employeeCode}=location.state.employee;
    return(
        <div className="main"><br></br><br></br>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description"><label>Email : </label>{email}</div>                
                    <div className="description"><label>Job Title : </label>{jobTitle}</div>                
                    <div className="description"><label>Phone : </label>{phone}</div>                
                    <div className="description"><label>Employee Code : </label>{employeeCode}</div>                
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">Back to Employee List</button>
                </Link>
            </div>
        </div>

    );
};

export default EmployeeDetails;