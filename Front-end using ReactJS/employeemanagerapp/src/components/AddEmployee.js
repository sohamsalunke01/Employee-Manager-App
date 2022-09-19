import React,{useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import { useEmployeesCrud } from "../context/EmployeesCrudContext";

const AddEmployee =()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[jobTitle,setJobTitle]=useState("");
    const[phone,setPhone]=useState("");
    // const[employeeCode,setEmployeeCode]=useState("");
    const{addEmployeeHandler}=useEmployeesCrud();
    const navigate=useNavigate();

    const add = (e)=>{
        e.preventDefault();
        if(name===""||email===""|| jobTitle===""||phone===""){
            alert("All the fields are mandatory!");
            return;
        }
        addEmployeeHandler({name,email,jobTitle,phone});
        setName("");
        setEmail("");
        setJobTitle("");
        setPhone("");
        // setEmployeeCode("");
        navigate(`/`);

    };
    
        return(
            <div className="ui main center">
                <br></br><br></br>
                <h2>Add Employee</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" 
                        name="name" 
                        placeholder="Name"
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={email} 
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>JobTitle</label>
                        <input type="text" name="jobTitle" placeholder="Job Title" value={jobTitle} 
                        onChange={(e)=>setJobTitle(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Phone</label>
                        <input type="number" name="phone" placeholder="Phone" value={phone} 
                        onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    {/* <div className="field">
                        <label>Employee Code</label>
                        <input type="text" name="employeeCode" placeholder="Employee Code" value={employeeCode} 
                        onChange={(e)=>setEmployeeCode(e.target.value)}/> */}
                    {/* </div> */}
                    <button className="ui button blue">Add</button>
                </form>
                <div className="center-div">
                <Link to="/">
                    <br></br>
                <button className="ui button blue center">Back to Employee List</button>
                </Link>
            </div>
            </div>

            );
        
};
    export default AddEmployee;
