import React from "react";
import user from "../images/icons8-user-100.png";
import {Link} from "react-router-dom";
import { useEmployeesCrud } from "../context/EmployeesCrudContext";

const EmployeeCard=(props)=>{
    const {removeEmployeeHandler}=useEmployeesCrud();

    const deleteEmployee=(id)=>{
        removeEmployeeHandler(id);
    };
    const {id,name,email,jobTitle,phone,employeeCode}=props.employee;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} />
                <div className="content">
                    <Link 
                    to={`/find/${id}`}
                    state={{employee:props.employee}}>
                    <div className="header">{name}</div>
                    <div><label>Email : </label>{email}</div>
                    <div><label>Job Title : </label>{jobTitle}</div>
                    <div><label>Phone : </label>{phone}</div>
                    <div><label>Employee Code : </label>{employeeCode}</div>
                    </Link>
                    </div>
                <i className="trash alternate outline icon"
                style={{color:"red",marginTop:"7px",marginLeft:"10px"}}
                onClick={()=>deleteEmployee(id)}
                />
                    <Link 
                    to={`/update/${id}`}
                    state={{employee:props.employee}}>
                <i className="edit alternate outline icon"
                style={{color:"blue",marginTop:"7px"}}
                />
                </Link>
            </div>

    );
};

export default EmployeeCard;