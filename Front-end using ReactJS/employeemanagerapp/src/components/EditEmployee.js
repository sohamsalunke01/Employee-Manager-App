import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEmployeesCrud } from "../context/EmployeesCrudContext";

const EditEmployee =()=>{
    const location=useLocation();
    const navigate =useNavigate();
    const{id,name,email,jobTitle,phone,employeeCode}=location.state.employee;
    const [newName,setNewName]=useState(name);
    const [newEmail,setNewEmail]=useState(email);
    const [newJobTitle,setNewJobTitle]=useState(jobTitle);
    const [newPhone,setNewPhone]=useState(phone);
    const [newEmployeeCode,setNewEmployeeCode]=useState(employeeCode);
    const{updateEmployeeHandler}=useEmployeesCrud();


    const update = (e)=>{
        e.preventDefault();
        if(newName===""||newEmail===""|| newJobTitle===""||newPhone===""){
            alert("All the fields are mandatory!");
            return;
        }
        updateEmployeeHandler({id,name:newName,email:newEmail,jobTitle:newJobTitle,phone:newPhone,employeeCode:employeeCode});
        setNewName("");
        setNewEmail("");
        setNewJobTitle("");
        setNewPhone("");
        setNewEmployeeCode("");
        navigate(`/`);

    };
        return(
            <div className="ui main center">
                <h2>Edit Employee</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" 
                        name="name" 
                        placeholder="Name"
                        value={newName} 
                        onChange={(e)=>setNewName(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={newEmail} 
                        onChange={(e)=>setNewEmail(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>JobTitle</label>
                        <input type="text" name="jobTitle" placeholder="Job Title" value={newJobTitle} 
                        onChange={(e)=>setNewJobTitle(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Phone</label>
                        <input type="number" name="phone" placeholder="Phone" value={newPhone} 
                        onChange={(e)=>setNewPhone(e.target.value)}/>
                    </div>
                    {/* <div className="field">
                        <label>Employee Code</label>
                        <input type="text" name="employeeCode" placeholder="Employee Code" value={newEmployeeCode} 
                        onChange={(e)=>setNewEmployeeCode(e.target.value)}/>
                    </div> */}
                    <button className="ui button blue">Update</button>
                </form>
            </div>

            );
        
}
    export default EditEmployee;
